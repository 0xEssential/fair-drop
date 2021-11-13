import 'dotenv/config';
import {ethers} from 'hardhat';
import '@nomiclabs/hardhat-ethers';
import {address as childAddress, abi as childAbi} from '../deployments/mumbai/FairDropRegistration.json';
import {address, abi} from '../deployments/goerli/MintWithProof.json';

async function main() {
  const accounts = await ethers.getSigners();
  const networkName = process.env.HARDHAT_NETWORK;

  if (networkName == 'goerli') {
    const NFT = await ethers.getContractAt(abi, address, accounts[0]);
    await NFT.setFxChildTunnel(childAddress);
  } else {
    const Registration = await ethers.getContractAt(childAbi, childAddress, accounts[0]);
    await Registration.setFxRootTunnel(address);
  }



}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
