import React from 'react';

import Register from '../Register';
import styles from './styles.module.css';

export default function Drop() {
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
          from 0xEssential&apos;s project Wrasslers.
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
