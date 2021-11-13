// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@maticnetwork/fx-portal/contracts/tunnel/FxBaseRootTunnel.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import { Constants } from "../Libraries/Constants.sol";

/**
 * @title MintWithProof
 * @notice This is a reference implementation for a fair NFT drop.
 * @dev This contract should be deployed to Ethereum mainnet and is the ERC721 contract for your NFT.
 */

contract MintWithProof is ERC721, FxBaseRootTunnel, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdTracker;
    uint256 public mintPrice = 0.1 ether;
    uint256 public remainingTokens = Constants.MAX_TOKEN_COUNT;
    mapping(address => bool) internal exhaustedMinters;

    constructor(
        address _checkpointManager,
        address _fxRoot
    )
    FxBaseRootTunnel(_checkpointManager, _fxRoot)
    ERC721(
        "0xEssential FairDrop",
        "FAIRDROP"
    )
    {} // solhint-disable-line no-empty-blocks

    function _baseURI() internal view override returns (string memory) {
        return "ipfs://bafybeicoe6oe2yoeubcpljqqec3vul4n4l7zz7adgrjegijlw3ndx34vce/";
    }

    /**
    * @notice Mint token with L2 proof
    * @dev We use Polygon to make registration and random selection inexpensive, then allow eligible minters
    * to generate an L2 proof of bytes. Once the Polygon CheckpointManager indexes the L2 transaction, the
    * proof can be used as a "mint pass" in this function. Minting is *expensive* in gas units but users may
    * find this approach preferable to FCFS gas auctions.
    *
    * @param inputData proof generated for transaction via Matic SDK - see
    * https://docs.polygon.technology/docs/develop/l1-l2-communication/state-transfer
    */
    function mintWithProof(bytes memory inputData) public payable {
        require(msg.value == mintPrice, "FD:mWP:402");
        require(!exhaustedMinters[msg.sender], "FD:mWP:401");

        bytes memory message = _validateAndExtractMessage(inputData);
        address minter = abi.decode(message, (address));
        require(minter == msg.sender, "FD:mWP:401");

        _mint(minter, _tokenIdTracker.current());
        _tokenIdTracker.increment();
        remainingTokens -= 1;
        _sendMessageToChild(abi.encodePacked(remainingTokens, msg.sender));

        exhaustedMinters[msg.sender] = true;
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

    /**
    * @notice no-op override
    * @param inputData proof generated for transaction - see https://docs.matic.network/docs/develop/l1-l2-communication/state-transfer
    */
    function receiveMessage(bytes memory inputData) public override onlyOwner {} // solhint-disable-line no-empty-blocks

    /**
    * @notice no-op override
    * @param data bytes
    */
    function _processMessageFromChild(bytes memory data) internal override {} // solhint-disable-line no-empty-blocks

    receive() external payable {} // solhint-disable-line no-empty-blocks
}
