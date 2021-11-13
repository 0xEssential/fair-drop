import { Contract, ContractInterface } from '@ethersproject/contracts';
import { useContext, useMemo } from 'react';

import { Web3Context } from '../contexts/web3Context';
import { FairDropRegistration, MintWithProof } from '../typechain';

export default function useContract<
  T extends FairDropRegistration | MintWithProof,
>(contractAddress: string, abi: ContractInterface, signed = false): T {
  const { address, provider, network, jsonProvider } = useContext(Web3Context);

  return useMemo(
    () =>
      new Contract(
        contractAddress,
        abi,
        signed ? provider.getSigner(address) : jsonProvider,
      ) as T,
    [address, abi, provider, network, jsonProvider],
  );
}
