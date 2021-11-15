import chai, {expect} from './chai-setup';
import { MockProvider } from 'ethereum-waffle';
import {ethers, deployments, getUnnamedAccounts} from 'hardhat';
import {
  deployContracts,
  setupUser,
  setupUsers,
  timetravelBlocks,
} from './utils';
import { BigNumber } from 'ethers';

import {FairDropRegistration, VRFCoordinatorMock } from '../typechain'

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
    VRF: VRFCoordinatorMock;
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
        const registered = await users[0].FairDropRegistration.registrationIndex(
          users[0].address
        )
        expect(registered).to.be.ok;
    });

    it('supports bulk admin registration', async () => {
      const {
        owner,
        users
      } = fixtures;

        await owner.FairDropRegistration.adminBulkRegisterForDrop(
          users.map((w) => w.address)
        );
        const registered = await owner.FairDropRegistration.registrationIndex(
          users[0].address
        )

        const registeredLast = await owner.FairDropRegistration.registrationIndex(
          users[users.length - 1].address
        )

        expect(registered).to.be.gt(0);
        expect(registeredLast).to.be.gt(0);
    });

    it('picks eligible minters for seed', async () => {
      const {
        users,
        owner
      } = fixtures;
        await timetravelBlocks(1000);

        const tx = await owner.FairDropRegistration.selectEligibleBuyers();
        const receipt = await tx.wait();

        const seed = BigNumber.from(Math.floor(Math.random() * 1000));

        const requestId = receipt.events[3].data;

        const randomnessTx = await owner.VRF.callBackWithRandomness(
          requestId,
          seed,
          await owner.FairDropRegistration.resolvedAddress
        );

        await randomnessTx.wait();

        const winnersCount = await users[0].FairDropRegistration.remainingMints();
        const slice = Math.floor(users.length / winnersCount.toNumber());
        const start = seed.mod(slice);

        console.warn(seed.toNumber(), slice, start.toNumber(), users.length)

        const status = await  users[start.toNumber()].FairDropRegistration.eligible();
        const status2 = await users[start.add(slice).toNumber()].FairDropRegistration.eligible();
        const status3 = await users[start.add(slice * 2).toNumber()].FairDropRegistration.eligible();
        const status4 = await users[start.add(slice * 3).toNumber()].FairDropRegistration.eligible();
        const status5 = await users[start.add(slice * 4).toNumber()].FairDropRegistration.eligible();

        console.warn(status, status2, status3, status4, status5)
        expect(status).to.eq(true);
        expect(status2).to.eq(true);

    });
  });
});
