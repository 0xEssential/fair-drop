import { Contract, ContractInterface } from '@ethersproject/contracts';
import { useContext, useMemo } from 'react';

import {
  FairDropRegistration,
  NFTStateTransfer,
} from '../../contracts/typechain';
import { Web3Context } from '../contexts/web3Context';

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
