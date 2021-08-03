import { Contract, ContractInterface } from '@ethersproject/contracts';
import { useContext, useMemo } from 'react';

import { Web3Context } from '../contexts/web3Context';

export default function useContract(
  contractAddress: string,
  ABI: ContractInterface,
) {
  const { address, provider } = useContext(Web3Context);

  return useMemo(
    () =>
      !!provider && !!ABI && !!address
        ? new Contract(contractAddress, ABI, provider.getSigner(address))
        : undefined,
    [address, ABI, provider],
  );
}
