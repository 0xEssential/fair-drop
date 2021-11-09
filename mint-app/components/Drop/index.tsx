import React, { useContext } from 'react';
import useSWR from 'swr';

import { Web3Context } from '../../contexts/web3Context';
import Register from '../Register';
import styles from './styles.module.css';

const isMatic = (network) => network === process.env.MATIC_CHAIN_ID;

export default function Drop() {
  const { address, onboard, provider, network } = useContext(Web3Context);

  const { data: status } = useSWR(
    isMatic(network) && address ? 'status' : null,
    async () => {
      const _status = await contract.registrationStatus(address);
      return Object.values(RegistrationStatus)[_status];
    },
    {
      refreshInterval: 500,
      isPaused: () => registering,
    },
  );

  return (
    <div className={styles.root}>
      <img src="/nft.png" />
      <div className={styles.info}>
        <h1>FairDrop NFTs</h1>
        <p>
          We&apos;re selling original artwork by James Blagden as a test of the
          FairDrop approach.
        </p>
        <p>
          These NFTs are 1 of 1 of 5 featuring Howler Dawes and Infinity Rush
          from 0xEssential&apos;s project{' '}
          <a href="https://wrasslers.com" target="_blank" rel="noreferrer">
            Wrasslers
          </a>
          .
        </p>
        <p>
          <strong>Tokens Available:</strong> 5
        </p>
        <p>
          <strong>Token Sale Start:</strong> 3 days
        </p>
        <p>
          <strong>Mint Price:</strong> 0.02 ETH
        </p>
        <Register />
      </div>
    </div>
  );
}
