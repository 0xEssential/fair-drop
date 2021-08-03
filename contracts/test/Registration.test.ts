import chai, {expect} from './chai-setup';
import {ethers, deployments, getUnnamedAccounts} from 'hardhat';
import {
  deployContracts,
  setupUser,
  setupUsers,
} from './utils';
import { Contract } from 'ethers';

describe('Drop Registration', function () {
  const setup = deployments.createFixture(async () => {
    const contracts = await deployContracts();
    const [_owner] = await ethers.getSigners();

    const users = await setupUsers(await getUnnamedAccounts(), contracts);

    const owner = await setupUser(_owner.address, contracts);

    return {
      ...contracts,
      users,
      owner: {...owner, ..._owner},
    };
  });

  interface ContractUser {
    address: string;
    VRF: Contract;
  }

  let fixtures: {
    owner: ContractUser;
    users: ContractUser[];
  };


  describe('', function () {
    before(async () => {
      fixtures = await setup();
    });

    it('', async () => {
      const {
        owner,
        users,
      } = fixtures;

        // expect(match.id).to.equal(matchId);
        // expect(match.randomness).to.equal(matchRandomness);
    });
  });
});
