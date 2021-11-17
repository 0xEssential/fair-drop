import { BigNumber, constants } from 'ethers';
import React, { ReactElement, useContext } from 'react';
import Countdown from 'react-countdown';
import useSWR from 'swr';

import fairDropRegistration from '../../contracts/deployments/mumbai/FairDropRegistration.json';
import MintFlow from '../components/MintFlow';
import RegisterKYC from '../components/RegisterKYC';
import { Web3Context } from '../contexts/web3Context';
import useContract from '../hooks/useContract';
import styles from '../styles/Mint.module.css';
import { FairDropRegistration } from '../typechain';
import { RegistrationStatus } from '../utils/registrationStatusEnum';

const statusForIndex = (index: BigNumber) => {
  if (index.eq(BigNumber.from(0))) return RegistrationStatus.Unregistered;
  if (index.eq(constants.MaxInt256)) return RegistrationStatus.Ineligible;

  return RegistrationStatus.Registered;
};

export default function Mint(): ReactElement {
  const { address } = useContext(Web3Context);
  const contract = useContract<FairDropRegistration>(
    fairDropRegistration.address,
    fairDropRegistration.abi,
  );

  const { data: state, mutate } = useSWR(
    contract ? 'status-' + (address || 'json') : null,
    async () => {
      const registrationIndex = address
        ? await contract.registrationIndex(address)
        : BigNumber.from(0);

      const eligible = address ? await contract.eligible(address) : false;
      const remaining = await contract.remainingMints();
      const mintWindow = await contract.nextWindow();

      return {
        status: eligible
          ? RegistrationStatus.Eligible
          : statusForIndex(registrationIndex),
        remaining,
        mintWindow,
      };
    },
  );

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
          {state?.status === RegistrationStatus.Unregistered && (
            <RegisterKYC
              onRegister={() => {
                mutate(
                  { ...state, status: RegistrationStatus.Registered },
                  false,
                );
              }}
            />
          )}

          {state?.status === RegistrationStatus.Registered && (
            <p>
              You&apos;re registered for the drop - check back to see if you won
              the ability to mint in{' '}
              <Countdown
                date={state?.mintWindow?.toNumber() * 1000}
                renderer={({ hours, minutes }) => (
                  <span>
                    {hours} hours, {minutes} minutes
                  </span>
                )}
              />
            </p>
          )}
          {state?.status === RegistrationStatus.Eligible && (
            <MintFlow state={state} />
          )}

          {state?.status === RegistrationStatus.Ineligible && (
            <p>
              You didn&apos;t win the raffle this time - check back in
              <br />
              <Countdown date={state?.mintWindow?.toNumber() * 1000} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
