import { MaticPOSClient } from '@maticnetwork/maticjs';
import React, { useState } from 'react';

import Button from '../components/Button';
import AdminLayout from '../layouts/Admin';

function Admin() {
  const [tx, setTx] = useState('');

  const [proof, setProof] = useState();

  const generateProof = async () => {
    const client: any = new MaticPOSClient({
      maticProvider: process.env.MATIC_RPC_URL, // replace if using mainnet
      parentProvider: process.env.RPC_URL, // replace if using mainnet
    });

    const _proof = await client.posRootChainManager.customPayload(
      tx, // txn hash of sendMessageToRoot
      '0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036', // SEND_MESSAGE_EVENT_SIG, do not change
    );

    setProof(_proof);
  };

  return (
    <section>
      <h2>Admin</h2>
      <label>
        Send to Root tx:
        <input onChange={(e) => setTx(e.target.value)} />
      </label>
      <Button onClick={generateProof}>Generate Proof</Button>
      {proof && <pre>{proof}</pre>}
    </section>
  );
}

Admin.Layout = AdminLayout;
export default Admin;
