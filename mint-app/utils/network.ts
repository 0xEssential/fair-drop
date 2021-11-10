import { Web3Provider } from '@ethersproject/providers';

import { chainArgs } from '../components/SwitchNetworkButton';

export const switchNetwork = async (
  provider: Web3Provider,
  chainID: string,
): Promise<void> =>
  await provider.send('wallet_addEthereumChain', [chainArgs[chainID]]);

export const requiredNetwork = (
  chainId: string | number,
  desiredChainId: string | number,
): boolean => `${chainId}` === `${desiredChainId}`;
