import chai, {expect} from './chai-setup';
import {ethers, deployments, getUnnamedAccounts} from 'hardhat';
import {
  deployContracts,
  setupUser,
  setupUsers,
} from './utils';
import { Contract, ContractFactory } from 'ethers';

import {FairDropRegistration, FairDropRegistration__factory, VRFCoordinatorMock} from '../typechain'
import { FairDropRegistrationInterface } from '../typechain/FairDropRegistration';
import { SignerWithAddress } from 'hardhat-deploy-ethers/dist/src/signers';

describe('Drop Registration', function () {
  const setup = deployments.createFixture(async () => {
    const signers = await ethers.getSigners()
    const owner = signers.shift();

    const contracts = await deployContracts(owner);

    const users = await setupUsers(signers, contracts);

    return {
      ...contracts,
      owner,
      users,
    };
  });

  interface ContractUser {
    address: string;
    FairDropRegistration: FairDropRegistration;
  }

  let fixtures: {
    owner: SignerWithAddress;
    users: ContractUser[];
  };


  describe('Fair Drop Registration', function () {
    before(async () => {
      fixtures = await setup();
    });

    it('supports registration', async () => {
      const {
        users,
      } = fixtures;

        await users[0].FairDropRegistration.registerForDrop();
        const registered = await users[0].FairDropRegistration.registrationStatus(
          users[0].address
        )
        expect(registered).to.be.ok;
    });

    it('picks eligible minters', async () => {
      const {
        users,
      } = fixtures;

        await users[0].FairDropRegistration.pickMinterTranche(
          345235235
        )

        const eligible = [];
        eligible.push(await users[0].FairDropRegistration.currentlyEligible(0));
        eligible.push(await users[1].FairDropRegistration.currentlyEligible(0));
        eligible.push(await users[2].FairDropRegistration.currentlyEligible(0));
        eligible.push(await users[3].FairDropRegistration.currentlyEligible(0));
        eligible.push(await users[4].FairDropRegistration.currentlyEligible(0));

        expect(eligible).to.include(users[0].address);
    });
  });
});
