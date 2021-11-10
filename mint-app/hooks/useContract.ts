import { Contract, ContractInterface } from '@ethersproject/contracts';
import { useContext, useMemo } from 'react';

import { Web3Context } from '../contexts/web3Context';
import { FairDropRegistration, NFTStateTransfer } from '../typechain';

export default function useContract<
  T extends FairDropRegistration | NFTStateTransfer,
>(contractAddress: string, abi: ContractInterface): T {
  const { address, provider, network, jsonProvider } = useContext(Web3Context);
  console.warn(jsonProvider);

  const signer = provider && provider?._network?.chainId === network;

  return useMemo(
    () =>
      new Contract(
        contractAddress,
        abi,
        signer ? provider.getSigner(address) : jsonProvider,
      ) as T,
    [address, abi, provider, network, jsonProvider],
  );
}
