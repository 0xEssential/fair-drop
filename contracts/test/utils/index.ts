import {Contract, ContractFactory, Signer} from 'ethers';
import {ethers,} from 'hardhat';
import { SignerWithAddress } from 'hardhat-deploy-ethers/dist/src/signers';
import { FairDropRegistration__factory, FairDropRegistration } from '../../typechain';

export const keyhash =
  '0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4';

export async function setupUsers<T extends {[contractName: string]: Contract}>(
  signers: SignerWithAddress[],
  contracts: T
): Promise<({address: string} & T)[]> {
  const users: ({address: string} & T)[] = [];
  for (const signer of signers) {
    users.push(await setupUser(signer, contracts));
  }

  return users;
}

export async function setupUser<T extends {[contractName: string]: Contract}>(
  signer: SignerWithAddress,
  contracts: T
): Promise<{address: string} & T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = {...signer};

  for (const key of Object.keys(contracts)) {
    user[key] = contracts[key].connect(signer);
  }
  return user as SignerWithAddress & T;
}

export async function deployContracts(owner: SignerWithAddress) {
  const MockLink = await ethers.getContractFactory('MockLink');
  const VRFCoordinatorMock = await ethers.getContractFactory(
    'VRFCoordinatorMock'
  );
  const link = await MockLink.deploy();
  const vrfCoordinatorMock = await VRFCoordinatorMock.deploy(link.address);

  const FairDropRegistrationContract = (await ethers.getContractFactory(
    'FairDropRegistration',
    owner
  )) as FairDropRegistration__factory;

  const FairDropRegistration = await FairDropRegistrationContract.deploy(
    vrfCoordinatorMock.address,
    link.address,
    keyhash,
    '0xCf73231F28B7331BBe3124B907840A94851f9f11'
  )

  // await link.transfer(FairDropRegistration.address, '100000000000000000000');

  const contracts = {
    FairDropRegistration,
  };

  return contracts;
}
