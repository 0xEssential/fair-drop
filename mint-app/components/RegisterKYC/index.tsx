import { signIn, useSession } from 'next-auth/react';
import React, { ReactElement, useContext, useState } from 'react';

import {
  abi as registrationAbi,
  address as registrationAddress,
} from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
import { FairDropRegistration } from '../../typechain';
import { addEtherscan } from '../../utils/connect';
import { sendMetaTx } from '../../utils/metaTx';
import { requiredNetwork } from '../../utils/network';
import Button from '../Button';
import SwitchNetworkButton from '../SwitchNetworkButton';
import styles from './styles.module.css';

export default function RegisterKYC({
  onRegister,
}: {
  onRegister: () => void;
}): ReactElement {
  const { status } = useSession();
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState(null);

  const { address, onboard, provider, network, notify } =
    useContext(Web3Context);

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
            await onboard?.walletCheck();
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
        <Button onClick={() => signIn('discord')}>Log in with Discord</Button>
        <p>
          <small>
            We&apos;re using Discord for some light KYC and to try to prevent
            bots from winning the raffle. 0xEssential may send you occasional
            emails to the address associated with your Discord account.
          </small>
        </p>
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
            )
              .then((resp) => resp.json())
              .then((data) => {
                console.warn(data);

                if (!data.success) {
                  setRegistering(false);
                  return setError(data?.error);
                }
                const { emitter } = notify.hash(data.txHash);
                emitter.on('all', addEtherscan);

                onRegister();
              });
          }}
        >
          {registering ? 'Transaction processing...' : 'Register for Drop'}
        </Button>
      )}
      <p>{error}</p>
    </div>
  );
}
