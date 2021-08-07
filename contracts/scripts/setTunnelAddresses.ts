import 'dotenv/config';
import {ethers} from 'hardhat';
import '@nomiclabs/hardhat-ethers';
import {address as childAddress, abi as childAbi} from '../deployments/mumbai/FairDropRegistration.json';
import {address, abi} from '../deployments/goerli/NFTStateTransfer.json';

async function main() {
  const accounts = await ethers.getSigners();
  const networkName = process.env.HARDHAT_NETWORK;

  if (networkName == 'goerli') {
    const NFT = await ethers.getContractAt(abi, address, accounts[0]);
    await NFT.setFxChildTunnel('0x8C7382F9D8f56b33781fE506E897a4F1e2d17255');
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
