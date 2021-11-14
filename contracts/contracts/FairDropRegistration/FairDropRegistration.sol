// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@maticnetwork/fx-portal/contracts/tunnel/FxBaseChildTunnel.sol";

import { Constants } from "../Libraries/Constants.sol";

contract FairDropRegistration is Ownable, FxBaseChildTunnel, VRFConsumerBase, ERC2771Context {
    using Counters for Counters.Counter;

    bytes32 internal keyHash;
    uint256 internal fee;
    bytes32 internal randomnessRequestId;

    struct MintWindow {
        uint256 registrationsCount;
        uint256 remainingMints;
        uint256 seed;
    }

    mapping (address => uint256) internal registrationIndex;
    mapping (uint256 => MintWindow) internal mintWindows;
    Counters.Counter private _registrationIndex;

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
        // use a 1-based counter so that a 0 value for an address represents "unregistered"
        _registrationIndex.increment();
    }

    /**
    * @notice Register for drop
    * @dev Registration is once per address. This function is the most decentralized
    * approach, but there is no Sybil resistance and may be flooded by bots.
    */
    function registerForDrop() public {
        require(registrationIndex[_msgSender()] == 0, "Already registered");
        registrationIndex[_msgSender()] = _registrationIndex.current();
        _registrationIndex.increment();
    }

    /**
    * @notice Register for drop via signed message
    * @dev Registration is once per address. Registration with a metatransaction
    * allows the proejct to cover gas fees for registrants, while also allowing the
    * project to perform KYC or anti-bot checks, such as requiring an email registration.
    */
    function kycRegisterForDrop() public onlyForwarder {
        require(registrationIndex[_msgSender()] == 0, "Already registered");
        registrationIndex[_msgSender()] = _registrationIndex.current();
        _registrationIndex.increment();
    }

    /**
    * @notice Register bulk addresses for drop.
    * @dev Registration is once per address. This function is only callable by
    * the contract owner, and can be used to bulk add addresses collected off-chain
    */
    function adminBulkRegisterForDrop(address[] memory addresses) public onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            if (registrationIndex[_msgSender()] == 0) {
                registrationIndex[addresses[i]] = _registrationIndex.current();

                _registrationIndex.increment();
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
        mintWindows[nextWindow] = MintWindow({
            registrationsCount: _registrationIndex.current() - 1,
            remainingMints: remainingMints,
            seed: 0
        });
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
        mintWindows[nextWindow].seed = randomness;
        nextWindow += Constants.WINDOW;
    }


    /**
    * @notice Callback function used by VRF Coordinator
    * @dev Chainlink VRF is inexpensive enough on Polygon to use it for
    * trustless, fair and on-chain drops. When the contract receives a
    * random number from VRF, we select n WINDOW_PARTICIPANTS who are
    * newly eligible to mint.
    */
    function eligible() public view returns (bool) {
        if (_undersubscribed()) return true;

        MintWindow storage window = mintWindows[nextWindow - Constants.WINDOW];

        uint256 addressIndex = registrationIndex[msg.sender];
        uint256 registrationsCount = window.registrationsCount;

        if (addressIndex == 0 || addressIndex > registrationsCount) return false;
        uint256 sliceSize = registrationsCount / window.remainingMints;

        uint256 startIndex = window.seed % sliceSize;

        if (addressIndex - 1 < startIndex) {
            return false;
        }

        return (addressIndex - 1 - startIndex) % sliceSize == 0;
    }

    /**
    * @notice Claim mint pass by asking Polygon to checkpoint this tx to L1
    * @dev using the registrationStatus mapping, your frontend can display
    * a button to perform this transaction for eligible minters. Once performed,
    * the transaction will be checkpointed on L1 in ~15 minutes. Once checkpointed,
    * use the Matic JS SDK to generate a proof to submit to the L1 contract.
    */
    function claim() public {
        require (eligible(), "FDR:c:401");

        _sendMessageToRoot(abi.encode(_msgSender(), nextWindow));
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

    function _undersubscribed() internal view returns (bool) {
        return remainingMints >  _registrationIndex.current();
    }
}
