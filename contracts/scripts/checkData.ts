import 'dotenv/config';
import {ethers} from 'hardhat';
import '@nomiclabs/hardhat-ethers';
import {address as childAddress, abi as childAbi} from '../deployments/mumbai/FairDropRegistration.json';
import {address, abi} from '../deployments/goerli/MintWithProof.json';

async function main() {
  const accounts = await ethers.getSigners();
  const networkName = process.env.HARDHAT_NETWORK;


    const NFT = await ethers.getContractAt(abi, address, accounts[0]);
    const data = await NFT.latestData()

    console.warn(data)
    const approved = await NFT.approvedMinters(accounts[0].address)
    console.warn(approved)

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
