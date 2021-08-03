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

  console.warn(networkName);
  const {deployer} = await getNamedAccounts();

  const { vrfCoordinator, linkToken, keyhash } = chainlinkEnv(networkName);

  await deploy('FairDropRegistration', {
    args: [
      vrfCoordinator,
      linkToken,
      keyhash,
      process.env[networkName.toUpperCase() + '_FX_CHILD']
    ],
    from: deployer,
    log: true,
  });
};
export default func;
func.tags = ['FairDropRegistration'];
