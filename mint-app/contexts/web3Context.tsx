import {
  BaseProvider,
  JsonRpcProvider,
  Provider,
  Web3Provider,
} from '@ethersproject/providers';
// import signOut from 'next-auth';
import React, {
  createContext,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { initNotify, initOnboard } from '../utils/connect';

const defaultValue: {
  onboard?: any;
  address?: string;
  provider?: BaseProvider;
  notify?: { hash: (txHash: string) => void };
  network?: number;
} = {};

const Web3Context = createContext(defaultValue);

const Web3ContextProvider = ({ children }: any): ReactElement => {
  const [provider, setProvider] = useState<BaseProvider>();
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [onboard, setOnboard] = useState(null);
  const [notify, setNotify] = useState(null);
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    const onboard = initOnboard({
      address: setAddress,
      network: (network) => {
        console.warn('SETTING NETWORK', network);
        setNetwork(network);
      },
      wallet: (wallet) => {
        if (wallet.provider) {
          setWallet(wallet);
          const provider = new Web3Provider(wallet.provider, 'any');
          setProvider(provider);
          window.localStorage.setItem('selectedWallet', wallet.name);
        } else {
          setProvider(null);
          setWallet({});
        }
      },
    });

    setOnboard(onboard);
    setNotify(initNotify());
  }, []);

  useEffect(() => {
    const previouslySelectedWallet =
      window.localStorage.getItem('selectedWallet');

    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet);
    }
  }, [onboard]);

  useEffect(() => {
    if (!provider) {
      setProvider(new JsonRpcProvider(process.env.MATIC_RPC_URL));
    }
  }, []);

  const value = {
    onboard,
    address,
    wallet,
    provider,
    notify,
    network,
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export default Web3ContextProvider;
export { Web3Context };
