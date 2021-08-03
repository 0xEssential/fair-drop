// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

import { Constants } from "../Libraries/Constants.sol";
import { FxBaseRootTunnel } from "../Libraries/tunnel/FxBaseRootTunnel.sol";

/**
 * @title NFTStateTransfer
 * @notice This is a reference implementation for a fair NFT drop.
 * @dev This contract should be deployed to Ethereum mainnet and is the ERC721 contract for your NFT.
 */

contract NFTStateTransfer is ERC721PresetMinterPauserAutoId, FxBaseRootTunnel, Ownable {
    uint256 public mintPrice = 0.02 ether;
    uint256 public remainingTokens = Constants.MAX_TOKEN_COUNT;
    bytes public latestData;
    address[] internal allMinters;
    mapping(address => bool) public approvedMinters;
    uint256 internal approvedMintersEndIndex;

    constructor(
        address _checkpointManager,
        address _fxRoot
    )
    FxBaseRootTunnel(_checkpointManager, _fxRoot)
    ERC721PresetMinterPauserAutoId("0xEssential FairDrop", "FAIRDROP", "ipfs://")
    {} // solhint-disable-line no-empty-blocks

    /**
    * @notice Receive list of eligible purchasers from L2
    * @dev We use Polygon to make registration and random selection inexpensive, then pass the list
    * of eligible buying accounts to this contract.
    * @param data bytes32 encoded list of eligible addressses.
    */
    function _processMessageFromChild(bytes memory data) internal override {
        address[] memory newMinters = new address[](Constants.WINDOW_PARTICIPANTS);
        (newMinters) = abi.decode(data, (address[]));
        for (uint256 index = 0; index < Constants.WINDOW_PARTICIPANTS; index++) {
            addEligibleMinter((newMinters[index]));
        }
    }

    function addEligibleMinter(address newMinter) internal {
        allMinters.push(newMinter);
        approvedMinters[newMinter] = true;
        approvedMintersEndIndex += 1;

        if(approvedMintersEndIndex >= Constants.WINDOW_PARTICIPANTS) {
            approvedMinters[allMinters[approvedMintersEndIndex - Constants.WINDOW_PARTICIPANTS]] = false;
        }
    }

    receive() external payable {} // solhint-disable-line no-empty-blocks

    /**
    * @notice Public mint function
    */
    function approvedMint() public payable {
        require(approvedMinters[msg.sender], "Not allowed to mint");
        require(msg.value >= mintPrice, "More ETH");
        approvedMinters[msg.sender] = false;
        mint(msg.sender);
        remainingTokens -= 1;
        _sendMessageToChild(abi.encodePacked(remainingTokens));
    }

    /**
    * @notice I have a regrettable FOMO ramp in my first project
    * so I want to be able to adjust price as I please
    */
    function setPrice(uint256 price) public onlyOwner {
        mintPrice = price;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }

    function receiveMessage(bytes memory inputData) public override onlyOwner {
        bytes memory message = _validateAndExtractMessage(inputData);
        _processMessageFromChild(message);
    }
}
