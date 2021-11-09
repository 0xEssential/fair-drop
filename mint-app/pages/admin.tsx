import { MaticPOSClient } from '@maticnetwork/maticjs';
import { utils } from 'ethers';
import React, { useContext, useState } from 'react';

import {
  abi,
  address as contractAddress,
} from '../../contracts/deployments/goerli/NFTStateTransfer.json';
import Button from '../components/Button';
import SwitchNetworkButton from '../components/SwitchNetworkButton';
import { Web3Context } from '../contexts/web3Context';
import useContract from '../hooks/useContract';
import AdminLayout from '../layouts/Admin';
import styles from '../styles/Home.module.css';

const isMatic = (_network) => _network && [137, 80001].includes(_network);

function Admin() {
  const [tx, setTx] = useState('');
  const { network } = useContext(Web3Context);

  const contract = useContract(contractAddress, abi);

  const [proof, setProof] = useState();

  const generateProof = async () => {
    setProof(null);
    const client: any = new MaticPOSClient({
      maticProvider: process.env.MATIC_RPC_URL, // replace if using mainnet
      parentProvider: process.env.RPC_URL, // replace if using mainnet
    });

    client.posRootChainManager
      .customPayload(
        tx, // txn hash of sendMessageToRoot
        '0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036', // SEND_MESSAGE_EVENT_SIG, do not change
      )
      .then((_proof) => {
        setProof(_proof);
        _proof &&
          contract.mintWithProof(_proof, {
            gasLimit: 18_000_000,
            value: utils.parseEther('0.02'),
          });
      })
      .catch((e) => {
        return setProof(e.message);
      });
  };

  return (
    <div className={styles.article}>
      <h2>L2 to L1 Message Passing</h2>
      <p>
        In order to pass your list of eligible minters to your Layer 1 contract,
        you need to generate a proof from your L2 contract.
      </p>
      <p>
        You need to find the transaction performed by the VRF Coordinator as a
        callback to the L2 contract
      </p>
      <section style={{ width: 400 }}>
        <label>
          Callback Tx Hash:
          <input
            style={{ width: '100%', marginBottom: 12 }}
            onChange={(e) => setTx(e.target.value)}
          />
        </label>
        {isMatic(network) ? (
          <SwitchNetworkButton chainId="5">Switch to L1</SwitchNetworkButton>
        ) : (
          <Button style={{ width: '100%' }} onClick={generateProof}>
            Generate Proof
          </Button>
        )}

        {proof && <pre>{proof}</pre>}
      </section>
    </div>
  );
}

Admin.Layout = AdminLayout;
export default Admin;
