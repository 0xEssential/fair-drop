import { Contract, ContractInterface } from '@ethersproject/contracts';
import { useContext, useMemo } from 'react';

import { Web3Context } from '../contexts/web3Context';
import { FairDropRegistration, NFTStateTransfer } from '../typechain';

export default function useContract<
  T extends FairDropRegistration | NFTStateTransfer,
>(contractAddress: string, abi: ContractInterface): T {
  const { address, provider } = useContext(Web3Context);

  return useMemo(
    () =>
      !!provider && !!address
        ? (new Contract(contractAddress, abi, provider.getSigner(address)) as T)
        : undefined,
    [address, abi, provider],
  );
}
