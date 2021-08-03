import { signIn, signOut, useSession } from 'next-auth/client';
import React, { useContext } from 'react';

import { Web3Context } from '../../contexts/web3Context';
import usePersonalSign from '../../hooks/usePersonalSign';

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

export default function AdminLogin() {
  const { address, onboard, provider } = useContext(Web3Context);
  const [session] = useSession();
  const signMessage = usePersonalSign();

  console.log(address);
  if (!address) {
    return (
      <button
        onClick={async () => {
          await onboard?.walletSelect();
          await onboard.walletCheck();
        }}
      >
        Connect Wallet
      </button>
    );
  }

  if (!session) {
    return (
      <button
        onClick={async () => {
          await provider?.send('wallet_addEthereumChain', [chainArgs['80001']]);

          setTimeout(async () => {
            const signedMessage = await signMessage('LOGIN');
            signIn('credentials', {
              signedMessage,
              address,
              nonce: '1234',
              redirect: false,
            });
          }, 500);
        }}
      >
        Sign in
      </button>
    );
  }

  return (
    <>
      <>
        <p>Signed in as {JSON.stringify(session.user)}</p> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    </>
  );
}
