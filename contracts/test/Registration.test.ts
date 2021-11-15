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
import { getAddress, hexlify, hexValue, hexZeroPad } from 'ethers/lib/utils';

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

      const addresses = [];
      for (let index = 0; index < 250; index++) {
        const address = hexZeroPad(hexValue(index), 20)
        addresses.push(getAddress(address))
      }

      await owner.FairDropRegistration.adminBulkRegisterForDrop(
        addresses
      );

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

      const entrants = users.map((u) => u.address).concat(addresses);

      const winnersCount = await users[0].FairDropRegistration.remainingMints();
      const slice = Math.floor(entrants.length / winnersCount.toNumber());
      const start = seed.mod(slice);

      const expectedMinters = [];

      while (expectedMinters.length < winnersCount.toNumber()) {
        const step = expectedMinters.length;
        expectedMinters.push(entrants[start.add(slice * step).toNumber()])
      };


      for (const address of expectedMinters) {
        const status = await  owner.FairDropRegistration.eligible(address);
        expect(status).to.eq(true);
      }
    });
  });
});
