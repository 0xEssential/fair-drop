import React, { useContext, useEffect, useState } from 'react';

import {
  abi,
  address as smartAddress,
} from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
import Button from '../Button';
import Register from '../Register';
import styles from './styles.module.css';

const chainArgs = {
  '80001': {
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

enum RegistrationStatus {
  Unregistered = 'Unregistered',
  Registered = 'Registered',
  Eligible = 'Eligible',
  Ineligible = 'Inelegible',
}

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
          Each piece is a 1 of 1 artwork, featuring the OG Wrasslers Howler
          Dawes and Infinity Rush from 0xEssential&apos;s project Wrasslers.
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
