import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {chainlinkEnv} from '../utils/network';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts, getChainId} = hre;
  const {deploy} = deployments;
  const networkName = await getChainId().then(
    (id) =>
      ({
        137: 'matic',
        80001: 'mumbai',
      }[id])
  );

  if (!networkName) return;

  const {deployer} = await getNamedAccounts();

  await deploy('FairDropGasStation', {
    from: deployer,
    log: true,
  });
};
export default func;
func.tags = ['FairDropGasStation'];
