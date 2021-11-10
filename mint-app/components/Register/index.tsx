import { BigNumber } from 'ethers';
import React, { ReactElement, useContext, useState } from 'react';

import {
  abi,
  address as smartAddress,
} from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
import { FairDropRegistration } from '../../typechain';
import { RegistrationStatus } from '../../utils/registrationStatusEnum';
import Button from '../Button';
import SwitchNetworkButton from '../SwitchNetworkButton';
import styles from './styles.module.css';

export default function Register({
  state: { status, mintWindow },
}: {
  state: { status: RegistrationStatus; mintWindow: BigNumber };
}): ReactElement {
  const [_registering, setRegistering] = useState(false);

  const { address, onboard, network } = useContext(Web3Context);

  const contract = useContract<FairDropRegistration>(smartAddress, abi);

  if (!address) {
    return (
      <div className={styles.root}>
        <Button
          onClick={async () => {
            await onboard?.walletSelect();
            await onboard.walletCheck();
          }}
        >
          Connect Wallet
        </Button>
      </div>
    );
  }

  if (network !== 80001) {
    return (
      <div className={styles.root}>
        <SwitchNetworkButton chainId={process.env.CHAIN_ID}>
          Switch to Polygon
        </SwitchNetworkButton>
      </div>
    );
  }

  if (status === RegistrationStatus.Unregistered) {
    return (
      <div className={styles.root}>
        <Button
          onClick={async () => {
            await contract?.registerForDrop();
            setRegistering(true);
          }}
        >
          Register for Drop
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <p>You&apos;re registered!</p>
      {mintWindow && (
        <p>
          Check back{' '}
          {mintWindow &&
            new Date(mintWindow.toNumber() * 1000).toLocaleDateString()}{' '}
          at{' '}
          {mintWindow &&
            new Date(mintWindow.toNumber() * 1000).toLocaleTimeString()}{' '}
          to see if you won the opportunity to mint
        </p>
      )}
    </div>
  );
}
