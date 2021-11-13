import { signIn, useSession } from 'next-auth/react';
import React, { ReactElement, useContext, useState } from 'react';

import {
  abi as registrationAbi,
  address as registrationAddress,
} from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
import { FairDropRegistration } from '../../typechain';
import { sendMetaTx } from '../../utils/metaTx';
import { requiredNetwork } from '../../utils/network';
import Button from '../Button';
import SwitchNetworkButton from '../SwitchNetworkButton';
import styles from './styles.module.css';

export default function RegisterKYC(): ReactElement {
  const { status } = useSession();
  const [registering, setRegistering] = useState(false);

  const { address, onboard, provider, network } = useContext(Web3Context);

  const registrationContract = useContract<FairDropRegistration>(
    registrationAddress,
    registrationAbi,
  );

  if (!address) {
    return (
      <div className={styles.root}>
        <Button
          onClick={async () => {
            await onboard?.walletSelect();
          }}
        >
          Connect Wallet
        </Button>
      </div>
    );
  }

  if (status !== 'authenticated') {
    return (
      <div className={styles.root}>
        <Button onClick={() => signIn('discord')}>KYC with Discord</Button>
      </div>
    );
  }

  if (!requiredNetwork(network, process.env.MATIC_CHAIN_ID)) {
    return (
      <div className={styles.root}>
        <SwitchNetworkButton chainId={process.env.MATIC_CHAIN_ID}>
          Switch to Polygon
        </SwitchNetworkButton>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {provider && (
        <Button
          disabled={registering}
          onClick={async () => {
            if (!provider) throw new Error('no provider');
            await sendMetaTx(
              registrationContract,
              provider,
              provider.getSigner(),
              'kycRegisterForDrop',
              [],
              () => setRegistering(true),
            );

            setRegistering(true);
          }}
        >
          {registering ? 'Loading' : 'Register for Drop'}
        </Button>
      )}
    </div>
  );
}
