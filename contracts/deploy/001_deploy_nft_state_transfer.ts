import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {stateTransferEnv} from '../utils/network';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts, getChainId} = hre;
  const {deploy} = deployments;
  const networkName = await getChainId().then(
    (id) =>
      ({
        1: 'mainnet',
        5: 'goerli',
      }[id])
  );

  if (!networkName) return;

  const {deployer} = await getNamedAccounts();
  const {ChildChainManager, _fxChild} = stateTransferEnv(networkName);

  await deploy('NFTStateTransfer', {
    from: deployer,
    args: [ChildChainManager, _fxChild],
    log: true,
  });
};
export default func;
func.tags = ['NFTStateTransfer'];
