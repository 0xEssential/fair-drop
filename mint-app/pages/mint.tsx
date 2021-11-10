import React, { useContext, useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import useSWR from 'swr';

import fairDropRegistration from '../../contracts/deployments/mumbai/FairDropRegistration.json';
import Register from '../components/Register';
import { Web3Context } from '../contexts/web3Context';
import useContract from '../hooks/useContract';
import styles from '../styles/Mint.module.css';
import { FairDropRegistration } from '../typechain';
import { RegistrationStatus } from '../utils/registrationStatusEnum';

export default function Mint() {
  const { address } = useContext(Web3Context);
  const contract = useContract<FairDropRegistration>(
    fairDropRegistration.address,
    fairDropRegistration.abi,
  );

  const { data: state, error } = useSWR(
    contract ? 'status' + contract.address : null,
    async () => {
      const status = address ? await contract.registrationStatus(address) : 0;
      const remaining = await contract.remainingMints();
      const mintWindow = await contract.nextWindow();

      return {
        status: Object.values(RegistrationStatus)[status],
        remaining,
        mintWindow,
      };
    },
    {
      refreshInterval: 1000,
    },
  );

  console.warn(error);

  return (
    <div className="article">
      <div className={styles.root}>
        <img src="/nft.png" />
        <div className={styles.info}>
          <h1>FairDrop NFTs</h1>
          <p>
            We&apos;re selling original artwork by James Blagden as a test of
            the FairDrop approach.
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
            <strong>Tokens Available:</strong> {state?.remaining?.toNumber()}
          </p>
          <p>
            <strong>Next Drawing:</strong>
            {state?.mintWindow && (
              <Countdown date={state?.mintWindow?.toNumber() * 1000} />
            )}
          </p>
          <p>
            <strong>Mint Price:</strong> 0.02 ETH
          </p>
          {state && <Register state={state} />}
        </div>
      </div>
    </div>
  );
}
