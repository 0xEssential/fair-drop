// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@maticnetwork/fx-portal/contracts/tunnel/FxBaseChildTunnel.sol";

import { Constants } from "../Libraries/Constants.sol";

contract FairDropRegistration is Ownable, FxBaseChildTunnel, VRFConsumerBase, ERC2771Context {
    bytes32 internal keyHash;
    uint256 internal fee;
    bytes32 internal randomnessRequestId;

    enum RegistrationStatus {
        Unregistered,
        Registered,
        Eligible,
        Ineligible
    }

    mapping (address => RegistrationStatus) public registrationStatus;
    address[] internal registrants;
    address[5] public currentlyEligible;
    uint256 public remainingMints = Constants.MAX_TOKEN_COUNT;

    // Timestamp when next eligible buyers can be selected
    uint256 public nextWindow;

    modifier onlyForwarder() {
        require(isTrustedForwarder(msg.sender), "FDR:429");
        _;
    }

    constructor(
        address _vrfCoordinator,
        address _linkToken,
        bytes32 _keyhash,
        address _fxChild,
        address forwarder
    )
    FxBaseChildTunnel(_fxChild)
    VRFConsumerBase(_vrfCoordinator, _linkToken)
    ERC2771Context(forwarder) {
        keyHash = _keyhash;
        fee = 0.0001 * 10**18;
        nextWindow = block.timestamp + 2 minutes;
    }

    /**
    * @notice Register for drop
    * @dev Registration is once per address. This function is the most decentralized
    * approach, but there is no Sybil resistance and may be flooded by bots.
    */
    function registerForDrop() public {
        require(registrationStatus[_msgSender()] == RegistrationStatus.Unregistered, "Already registered");
        registrationStatus[_msgSender()] = RegistrationStatus.Registered;
        registrants.push(_msgSender());
    }

    /**
    * @notice Register for drop via signed message
    * @dev Registration is once per address. Registration with a metatransaction
    * allows the proejct to cover gas fees for registrants, while also allowing the
    * project to perform KYC or anti-bot checks, such as requiring an email registration.
    */
    function kycRegisterForDrop() public onlyForwarder {
        require(registrationStatus[_msgSender()] == RegistrationStatus.Unregistered, "Already registered");
        registrationStatus[_msgSender()] = RegistrationStatus.Registered;
        registrants.push(_msgSender());
    }

    /**
    * @notice Register bulk addresses for drop.
    * @dev Registration is once per address. This function is only callable by
    * the contract owner, and can be used to bulk add addresses collected off-chain
    */
    function adminBulkRegisterForDrop(address[] memory addresses) public onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            if (registrationStatus[addresses[i]] == RegistrationStatus.Unregistered) {
                registrationStatus[addresses[i]] = RegistrationStatus.Registered;
                registrants.push(addresses[i]);

            }
        }
    }

    /**
    * @notice Public function for selecting next tranche of eligible minters
    * @dev We use a public function so anyone may call it, but use guards to ensure it
    * can't be called too soon. This could be replaced by Chainlink keepers once
    * available on Polygon.
    */
    function selectEligibleBuyers() public {
        require(block.timestamp > nextWindow, "Buying window still open");
        nextWindow += Constants.WINDOW;
        randomnessRequestId = requestRandomness(keyHash, fee);
    }

    /**
    * @notice Callback function used by VRF Coordinator
    * @dev Chainlink VRF is inexpensive enough on Polygon to use it for
    * trustless, fair and on-chain drops. When the contract receives a
    * random number from VRF, we select n WINDOW_PARTICIPANTS who are
    * newly eligible to mint.
    * @param requestId id of request being fulfilled
    * @param randomness Random number received from VRF
    */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        require(requestId == randomnessRequestId, "Bad randomness fulfillment");

        uint256 iterations = 0;
        while (iterations < Constants.WINDOW_PARTICIPANTS && iterations < registrants.length) {
            uint256 localPseudoRandom = uint256(keccak256(abi.encode(randomness, block.timestamp, iterations)));
            address eligible = registrants[localPseudoRandom % registrants.length];
            if (registrationStatus[eligible] == RegistrationStatus.Registered) {
                currentlyEligible[iterations] = eligible;
                registrationStatus[eligible] = RegistrationStatus.Eligible;
            }
            iterations += 1;
        }
    }

    /**
    * @notice Claim mint pass by asking Polygon to checkpoint a tx to L1
    * @dev using the registrationStatus mapping, your frontend can display
    * a button to perform this transaction for eligible minters. Once performed,
    * the transaction will be checkpointed on L1 in ~15 minutes. Once checkpointed,
    * use the Matic JS SDK to generate a proof to submit to the L1 contract.
    */
    function claim() public {
        require (registrationStatus[_msgSender()] == RegistrationStatus.Eligible, "401");

        _sendMessageToRoot(abi.encode(_msgSender()));
    }

    /**
    * @notice Receives message from L1 contract, updating minter's eligibility and remaining mints.
    */
    function _processMessageFromRoot(
        uint256 stateId,
        address sender,
        bytes memory data
    ) internal override validateSender(sender) {
        (uint256 _remainingMints, address minter) = abi.decode(data, (uint256, address));
        remainingMints = _remainingMints;
        registrationStatus[minter] = RegistrationStatus.Ineligible;
    }

    function _msgSender() internal view override(Context, ERC2771Context) returns (address sender) {
        if (isTrustedForwarder(msg.sender)) {
            // The assembly code is more direct than the Solidity version using `abi.decode`.
            assembly {
                sender := shr(96, calldataload(sub(calldatasize(), 20)))
            }
        } else {
            return super._msgSender();
        }
    }

    function _msgData() internal view override(Context, ERC2771Context) returns (bytes calldata) {
        if (isTrustedForwarder(msg.sender)) {
            return msg.data[:msg.data.length - 20];
        } else {
            return super._msgData();
        }
    }
}
