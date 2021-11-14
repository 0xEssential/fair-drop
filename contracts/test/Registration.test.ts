import chai, {expect} from './chai-setup';
import {ethers, deployments} from 'hardhat';
import {
  deployContracts,
  setupUser,
  setupUsers,
} from './utils';
import { BigNumber } from 'ethers';

import {FairDropRegistration } from '../typechain'

describe('Drop Registration', function () {
  const setup = deployments.createFixture(async () => {
    const signers = await ethers.getSigners()
    const _owner = signers.shift();

    const contracts = await deployContracts(_owner);

    const users = await setupUsers(signers, contracts);
    const owner = await setupUser(_owner, contracts);

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
    owner: ContractUser;
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

    it('picks eligible minters for seed', async () => {
      const {
        users,
        owner
      } = fixtures;
        const tx = await owner.FairDropRegistration.adminBulkRegisterForDrop(
          users.map((u) => u.address)
        )
        await tx.wait();

        const winnersCount = await users[0].FairDropRegistration.remainingMints();
        const seed = BigNumber.from(Math.floor(Math.random() * 1000));
        const slice = Math.floor(users.length / winnersCount.toNumber());
        const start = seed.mod(slice);

        const status = await  users[start.toNumber()].FairDropRegistration.eligible(seed);
        const status2 = await users[start.add(slice).toNumber()].FairDropRegistration.eligible(seed);
        const status3 = await users[start.add(slice * 2).toNumber()].FairDropRegistration.eligible(seed);
        const status4 = await users[start.add(slice * 3).toNumber()].FairDropRegistration.eligible(seed);
        const status5 = await users[start.add(slice * 4).toNumber()].FairDropRegistration.eligible(seed);

        console.warn(status, status2, status3, status4, status5)
        expect(status).to.eq(true);
        expect(status2).to.eq(true);

    });
  });
});
