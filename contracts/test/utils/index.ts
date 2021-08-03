import {Contract} from 'ethers';
import {ethers} from 'hardhat';

export async function setupUsers<T extends {[contractName: string]: Contract}>(
  addresses: string[],
  contracts: T
): Promise<({address: string} & T)[]> {
  const users: ({address: string} & T)[] = [];
  for (const address of addresses) {
    users.push(await setupUser(address, contracts));
  }
  return users;
}

export async function setupUser<T extends {[contractName: string]: Contract}>(
  address: string,
  contracts: T
): Promise<{address: string} & T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = {address};
  for (const key of Object.keys(contracts)) {
    user[key] = contracts[key].connect(address);
  }
  return user as {address: string} & T;
}

export async function deployContracts() {
  const [deployer] = await ethers.getSigners();

  const MockLink = await ethers.getContractFactory('MockLink');
  const VRFCoordinatorMock = await ethers.getContractFactory(
    'VRFCoordinatorMock'
  );
  const link = await MockLink.deploy();
  const vrfCoordinatorMock = await VRFCoordinatorMock.deploy(link.address);

  // const WrasslingMatchContract = await ethers.getContractFactory(
  //   'WrasslingMatch'
  // );

  // const WrasslingMatch = await WrasslingMatchContract.deploy(
  //   vrfCoordinatorMock.address,
  //   link.address,
  //   keyhash
  // );


  // await link.transfer(WrasslingMatch.address, '100000000000000000000');

  const contracts = {
    VRF: vrfCoordinatorMock,
  };

  return contracts;
}
