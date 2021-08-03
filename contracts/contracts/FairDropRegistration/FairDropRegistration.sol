// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

import { Constants } from "../Libraries/Constants.sol";
import { ContextMixin } from "../Libraries/matic/common/ContextMixin.sol";
import { FxBaseChildTunnel } from "../Libraries/tunnel/FxBaseChildTunnel.sol";
import { NativeMetaTransaction } from "../Libraries/matic/common/NativeMetaTransaction.sol";

contract FairDropRegistration is NativeMetaTransaction, FxBaseChildTunnel, VRFConsumerBase {
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
    address[] internal currentlyEligible;
    uint256 public remainingMints = Constants.MAX_TOKEN_COUNT;

    // Timestamp when next eligible buyers can be selected
    uint256 public nextWindow;

    constructor(
        address _vrfCoordinator,
        address _linkToken,
        bytes32 _keyhash,
        address _fxChild
    )
    FxBaseChildTunnel(_fxChild)
    VRFConsumerBase(_vrfCoordinator, _linkToken) {
        _initializeEIP712("FairDropRegistration");
        keyHash = _keyhash;
        fee = 0.0001 * 10**18;
        nextWindow = block.timestamp + 5 minutes;
    }

    /**
    * @notice Register for drop
    * @dev Registration is once per address
    */
    function registerForDrop() public {
        require(registrationStatus[msg.sender] == RegistrationStatus.Unregistered, "Already registered");
        registrationStatus[msg.sender] = RegistrationStatus.Registered;
        registrants.push(msg.sender);
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
    * newly eligible to mint and send those addresses to the L1 contract.
    * @param requestId id of request being fulfilled
    * @param randomness Random number received from VRF
    */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        require(requestId == randomnessRequestId, "Bad randomness fulfillment");

        for (uint256 i = 0; i < currentlyEligible.length; i++) {
            registrationStatus[currentlyEligible[i]] = RegistrationStatus.Ineligible;
            delete currentlyEligible[i];
        }

        // unbound, should be more careful here
        while (currentlyEligible.length < Constants.WINDOW_PARTICIPANTS) {
            uint256 localPseudoRandom = uint256(keccak256(abi.encode(randomness, block.timestamp)));
            address eligible = registrants[localPseudoRandom % registrants.length];
            if (registrationStatus[eligible] == RegistrationStatus.Registered) {
                currentlyEligible.push(eligible);
                registrationStatus[eligible] = RegistrationStatus.Eligible;
            }
        }

        _sendMessageToRoot(abi.encodePacked(currentlyEligible));
    }

    function _processMessageFromRoot(
        uint256 stateId,
        address sender,
        bytes memory data
    ) internal override validateSender(sender) {
        (uint256 _remainingMints) = abi.decode(data, (uint256));
        remainingMints = _remainingMints;
    }
}
