import React, { useContext, useEffect, useState } from 'react';

import {
  abi,
  address as smartAddress,
} from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
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

enum RegistrationStatus {
  Unregistered = 'Unregistered',
  Registered = 'Registered',
  Eligible = 'Eligible',
  Ineligible = 'Inelegible',
}

export default function Home() {
  const [mintWindow, setWindow] = useState(0);
  const [status, setStatus] = useState(RegistrationStatus.Unregistered);

  const { address, onboard, provider, network } = useContext(Web3Context);
  console.warn(smartAddress);

  const isMatic = network && [137, 80001].includes(network);
  const contract = useContract(smartAddress, abi);

  useEffect(() => {
    if (!contract || !isMatic || status === RegistrationStatus.Registered)
      return;
    const getWindow = async () => {
      const _mintWindow = await contract.nextWindow();
      setWindow(_mintWindow.toNumber());
    };

    getWindow();
  }, [contract, status, network]);

  useEffect(() => {
    if (!contract || !isMatic || !address) return;
    const getStatus = async () => {
      const _status = await contract.registrationStatus(address);
      console.warn(_status, Object.values(RegistrationStatus)[_status]);
      setStatus(Object.values(RegistrationStatus)[_status]);
    };

    getStatus();
  }, [contract, address, network]);

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

  if (status === RegistrationStatus.Unregistered) {
    return (
      <div className={styles.root}>
        <Button
          onClick={async () => {
            await contract?.registerForDrop();
          }}
        >
          Register for Drop
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <pre>{address}</pre>
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
