import React, { ReactElement, useContext, useState } from 'react';

import {
  abi as registrationAbi,
  address as registrationAddress,
} from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
import { FairDropRegistration } from '../../typechain';
import { requiredNetwork } from '../../utils/network';
import Button from '../Button';
import SwitchNetworkButton from '../SwitchNetworkButton';
import styles from './styles.module.css';

export default function Register(): ReactElement {
  const [registering, setRegistering] = useState(false);

  const { address, onboard, network, provider } = useContext(Web3Context);

  const registrationContract = useContract<FairDropRegistration>(
    registrationAddress,
    registrationAbi,
    !!provider,
  );

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
      <Button
        disabled={registering}
        onClick={async () => {
          await registrationContract?.registerForDrop();
          setRegistering(true);
        }}
      >
        {registering ? 'Loading' : 'Register for Drop'}
      </Button>
    </div>
  );
}
