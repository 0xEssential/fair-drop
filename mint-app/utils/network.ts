import { Web3Provider } from '@ethersproject/providers';

const chainArgs: Record<number, any> = {
  80001: {
    chainId: '0x13881',
    chainName: 'Mumbai Testnet',
    rpcUrls: ['https://rpc-mumbai.matic.today/'],
    iconUrls: [],
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://mumbai-explorer.matic.today/'],
  },
};

export const switchNetwork = async (
  provider: Web3Provider,
  chainID: number,
): Promise<void> =>
  await provider.send('wallet_addEthereumChain', [chainArgs[chainID]]);
