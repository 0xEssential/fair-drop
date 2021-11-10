import { Web3Provider } from '@ethersproject/providers';
import { useContext } from 'react';

import { Web3Context } from '../contexts/web3Context';

export const hexlify = (message: string) =>
  '0x' + Buffer.from(message, 'utf8').toString('hex');

export default function usePersonalSign() {
  const { provider, address } = useContext(Web3Context);

  return async (message: string) => {
    return provider?.send('personal_sign', [hexlify(message), address]);
  };
}
