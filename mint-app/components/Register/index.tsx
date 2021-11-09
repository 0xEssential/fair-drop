import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

import {
  abi,
  address as smartAddress,
} from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import {
  FairDropRegistration,
  FairDropRegistration__factory,
} from '../../../contracts/typechain';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
import { RegistrationStatus } from '../../utils/registrationStatusEnum';
import Button from '../Button';
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

export default function Register({ state }) {
  const [mintWindow, setWindow] = useState(0);
  const [registering, setRegistering] = useState(false);

  const { address, onboard, provider, network } = useContext(Web3Context);

  const isMatic = (_network) => _network && [137, 80001].includes(_network);
  const contract = useContract<FairDropRegistration>(smartAddress, abi);

  useEffect(() => {
    if (!contract || !isMatic(network)) return;
    const getWindow = async () => {
      const _mintWindow = await contract.nextWindow();
      setWindow(_mintWindow.toNumber());
    };

    getWindow();
  }, [contract, state, network]);

  if (!provider) {
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
        <Button
          onClick={async () =>
            await provider.send('wallet_addEthereumChain', [chainArgs['80001']])
          }
        >
          Switch to Polygon
        </Button>
      </div>
    );
  }

  if (state?.status === RegistrationStatus.Unregistered) {
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
          {mintWindow && new Date(mintWindow * 1000).toLocaleDateString()} at{' '}
          {mintWindow && new Date(mintWindow * 1000).toLocaleTimeString()} to
          see if you won the opportunity to mint
        </p>
      )}
    </div>
  );
}
