import { MaticPOSClient } from '@maticnetwork/maticjs';
import { BigNumber } from 'ethers';
import { utils } from 'ethers';
import React, { ReactElement, useContext, useEffect, useState } from 'react';

import {
  abi as nftAbi,
  address as nftAddress,
} from '../../../contracts/deployments/goerli/NFTStateTransfer.json';
import {
  abi as registrationAbi,
  address as registrationAddress,
} from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
import { FairDropRegistration, NFTStateTransfer } from '../../typechain';
import { requiredNetwork } from '../../utils/network';
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
  const [claimTx, setClaimTx] = useState<Record<string, any>>();

  const { address, onboard, network, jsonProvider } = useContext(Web3Context);

  const registrationContract = useContract<FairDropRegistration>(
    registrationAddress,
    registrationAbi,
  );
  const nftContract = useContract<NFTStateTransfer>(nftAddress, nftAbi);

  useEffect(() => {
    const getTx = async (hash) => {
      const tx = await jsonProvider?.getTransaction(hash);
      console.warn(tx);
      setClaimTx(tx);
    };
    const _claimTx = window?.localStorage?.getItem('claimTx');
    console.warn(_claimTx);
    _claimTx && jsonProvider && getTx(_claimTx);
  }, [jsonProvider]);

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

  if (status === RegistrationStatus.Unregistered) {
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
          onClick={async () => {
            await registrationContract?.registerForDrop();
            setRegistering(true);
          }}
        >
          Register for Drop
        </Button>
      </div>
    );
  }
  if (status === RegistrationStatus.Registered) {
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

  if (claimTx) {
    if (!requiredNetwork(network, process.env.L1_CHAIN_ID)) {
      return (
        <SwitchNetworkButton chainId={process.env.L1_CHAIN_ID}>
          Switch to Mainnet
        </SwitchNetworkButton>
      );
    }

    return (
      <div className={styles.root}>
        <p>
          Please wait for your claim transaction to be checkpointed on Layer 1
        </p>
        <Button
          onClick={async () => {
            const client: any = new MaticPOSClient({
              maticProvider: process.env.MATIC_RPC_URL, // replace if using mainnet
              parentProvider: process.env.RPC_URL, // replace if using mainnet
            });

            client.posRootChainManager
              .customPayload(
                claimTx, // txn hash of sendMessageToRoot
                '0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036', // SEND_MESSAGE_EVENT_SIG, do not change
              )
              .then((_proof) => {
                nftContract.mintWithProof(_proof, {
                  value: utils.parseEther('0.02'),
                });
              })
              .catch((e) => {
                console.warn(e.message);
              });
          }}
        >
          Mint NFT
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <p>You&apos;re Eligible to Mint!</p>
      {mintWindow && (
        <p>
          You have until{' '}
          {mintWindow &&
            new Date(mintWindow.toNumber() * 1000).toLocaleDateString()}{' '}
          at{' '}
          {mintWindow &&
            new Date(mintWindow.toNumber() * 1000).toLocaleTimeString()}{' '}
          to mint your NFT.
        </p>
      )}
      <p>Minting is a multi-step process that takes about 15 minutes.</p>
      <p>First, claim your mint pass proof</p>
      {!requiredNetwork(network, process.env.MATIC_CHAIN_ID) ? (
        <SwitchNetworkButton chainId={process.env.MATIC_CHAIN_ID}>
          Switch to Polygon
        </SwitchNetworkButton>
      ) : (
        <Button
          onClick={async () => {
            const tx = await registrationContract?.claim();
            window.localStorage.setItem('claimTx', tx.hash);
            setClaimTx(tx);
          }}
        >
          Claim Mint Pass
        </Button>
      )}
    </div>
  );
}
