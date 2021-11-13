import Notify, { API } from 'bnc-notify';
import Onboard from 'bnc-onboard';

const networkId = parseInt(process.env.MATIC_CHAIN_ID, 1);
const rpcUrl = process.env.RPC_URL;
const apiUrl = process.env.REACT_APP_API_URL;
const dappId = '5c501569-1ad1-490d-a7d0-d8a0aba75dad';

export function initOnboard(subscriptions) {
  return Onboard({
    dappId,
    hideBranding: true,
    networkId,
    apiUrl,
    darkMode: true,
    subscriptions,
    walletSelect: {
      wallets: [
        { walletName: 'metamask' },
        {
          walletName: 'trezor',
          appUrl: 'https://fairdrop.0xessential.com',
          rpcUrl,
        },
        {
          walletName: 'ledger',
          rpcUrl,
        },
        {
          walletName: 'walletConnect',
          infuraKey: process.env.INFURA_KEY,
        },
        { walletName: 'cobovault', appName: 'FairDrop', rpcUrl },
        {
          walletName: 'lattice',
          appName: 'FairDrop',
          rpcUrl,
        },
        { walletName: 'coinbase' },
        { walletName: 'status' },
        { walletName: 'walletLink', rpcUrl },
        { walletName: 'torus' },
        { walletName: 'trust', rpcUrl },
        { walletName: 'opera' },
        { walletName: 'operaTouch' },
        { walletName: 'imToken', rpcUrl },
        { walletName: 'meetone' },
        { walletName: 'mykey', rpcUrl },
        { walletName: 'wallet.io', rpcUrl },
        { walletName: 'huobiwallet', rpcUrl },
        { walletName: 'hyperpay' },
        { walletName: 'atoken' },
        { walletName: 'liquality' },
        { walletName: 'frame' },
        { walletName: 'tokenpocket', rpcUrl },
        { walletName: 'authereum', disableNotifications: true },
        { walletName: 'ownbit' },
      ],
    },
    walletCheck: [
      { checkName: 'derivationPath' },
      { checkName: 'connect' },
      { checkName: 'accounts' },
    ],
  });
}

export function initNotify(): API {
  return Notify({
    dappId,
    networkId,
    apiUrl,
  });
}
