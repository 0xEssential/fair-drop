import { MaticPOSClient } from '@maticnetwork/maticjs';
import { BigNumber } from 'ethers';
import { utils } from 'ethers';
import React, { ReactElement, useContext, useEffect, useState } from 'react';
import Countdown from 'react-countdown';

import MintWithProofContract from '../../../contracts/deployments/goerli/MintWithProof.json';
import FairDropRegistrationContract from '../../../contracts/deployments/mumbai/FairDropRegistration.json';
import { Web3Context } from '../../contexts/web3Context';
import useContract from '../../hooks/useContract';
import { FairDropRegistration, MintWithProof } from '../../typechain';
import { requiredNetwork } from '../../utils/network';
import Button from '../Button';
import SwitchNetworkButton from '../SwitchNetworkButton';
import styles from './styles.module.css';

export default function MintFlow({
  state: { mintWindow },
}: {
  state: { mintWindow: BigNumber };
}): ReactElement {
  const [claimTx, _setClaimTx] = useState<Record<string, any>>();

  const { network, jsonProvider } = useContext(Web3Context);

  const registrationContract = useContract<FairDropRegistration>(
    FairDropRegistrationContract.address,
    FairDropRegistrationContract.abi,
    true,
  );

  const nftContract = useContract<MintWithProof>(
    MintWithProofContract.address,
    MintWithProofContract.abi,
    true,
  );

  const setClaimTx = async (txHash: string) => {
    const tx = await jsonProvider?.getTransaction(txHash);
    const timestamp = (await jsonProvider.getBlock(tx.blockHash)).timestamp;
    _setClaimTx({ ...tx, timestamp });
  };

  useEffect(() => {
    const _claimTx = window?.localStorage?.getItem('claimTx');
    _claimTx && jsonProvider && setClaimTx(_claimTx);
  }, [jsonProvider]);

  const ready = claimTx?.timestamp + 15 * 60 > Date.now();

  if (ready) {
    return (
      <div className={styles.root}>
        {requiredNetwork(network, process.env.L1_CHAIN_ID) ? (
          <Button
            onClick={async () => {
              const client: any = new MaticPOSClient({
                maticProvider: process.env.MATIC_RPC_URL, // replace if using mainnet
                parentProvider: process.env.RPC_URL, // replace if using mainnet
              });

              client.posRootChainManager
                .customPayload(
                  claimTx.hash, // txn hash of sendMessageToRoot
                  '0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036', // SEND_MESSAGE_EVENT_SIG, do not change
                )
                .then(async (_proof) => {
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
        ) : (
          <SwitchNetworkButton chainId={process.env.L1_CHAIN_ID}>
            Switch to Mainnet
          </SwitchNetworkButton>
        )}
      </div>
    );
  }

  if (claimTx) {
    return (
      <div className={styles.root}>
        <p>
          In{' '}
          <Countdown
            date={(claimTx?.timestamp + 15 * 60) * 1000}
            onComplete={() => {
              _setClaimTx({ ...claimTx, timestamp: claimTx.timestamp - 1 });
            }}
            renderer={({ minutes, seconds }) => (
              <span>
                {minutes} minutes {seconds} seconds
              </span>
            )}
          />{' '}
          your L2 claim transaction will be checkpointed on L1 and you can mint
          your NFT.
        </p>
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
      <p>First, claim your mint pass with a Polygon transaction</p>
      {!requiredNetwork(network, process.env.MATIC_CHAIN_ID) ? (
        <SwitchNetworkButton chainId={process.env.MATIC_CHAIN_ID}>
          Switch to Polygon
        </SwitchNetworkButton>
      ) : (
        <Button
          onClick={async () => {
            const tx = await registrationContract?.claim();
            window.localStorage.setItem('claimTx', tx.hash);
            setClaimTx(tx.hash);
          }}
        >
          Claim Mint Pass
        </Button>
      )}
    </div>
  );
}
