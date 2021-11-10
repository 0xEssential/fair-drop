import { Contract, ContractInterface } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';
import { useContext, useMemo } from 'react';

import { Web3Context } from '../contexts/web3Context';
import { FairDropRegistration, NFTStateTransfer } from '../typechain';

export default function useContract<
  T extends FairDropRegistration | NFTStateTransfer,
>(contractAddress: string, abi: ContractInterface): T {
  const { address, provider, network } = useContext(Web3Context);

  return useMemo(
    () =>
      (provider as Web3Provider)
        ? (new Contract(
            contractAddress,
            abi,
            address ? (provider as Web3Provider).getSigner(address) : provider,
          ) as T)
        : null,
    [address, abi, provider, network],
  );
}
