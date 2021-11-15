import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { signOut } from 'next-auth/react';
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
  provider?: Web3Provider;
  jsonProvider?: JsonRpcProvider;
  notify?: { hash: (txHash: string) => { emitter: any } };
  network?: number;
} = {};

const Web3Context = createContext(defaultValue);

const Web3ContextProvider = ({ children }: any): ReactElement => {
  const [provider, setProvider] = useState<Web3Provider>();
  const [jsonProvider, _setJsonProvider] = useState<JsonRpcProvider>(
    new JsonRpcProvider(process.env.MATIC_RPC_URL),
  );
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [onboard, setOnboard] = useState(null);
  const [notify, setNotify] = useState(null);
  const [wallet, setWallet] = useState({});

  const addressRef = useRef();

  useEffect(() => {
    window.localStorage.removeItem('walletconnect');
    const onboard = initOnboard({
      address: setAddress,
      network: setNetwork,
      wallet: (wallet) => {
        if (wallet.provider) {
          setWallet(wallet);
          const provider = new Web3Provider(
            wallet.provider,
            parseInt(process.env.MATIC_CHAIN_ID, 10),
          );
          provider.on('network', (newNetwork, oldNetwork) => {
            // When a Provider makes its initial connection, it emits a "network"
            // event with a null oldNetwork along with the newNetwork. So, if the
            // oldNetwork exists, it represents a changing network
            if (
              oldNetwork &&
              newNetwork.chainId !== parseInt(process.env.MATIC_CHAIN_ID, 10)
            ) {
              // signOut();
            }
          });
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
    if (!addressRef.current) {
      addressRef.current = address;
      return;
    }

    addressRef.current = address;
    signOut();
  }, [address]);

  const value = {
    onboard,
    address,
    wallet,
    provider,
    notify,
    network,
    jsonProvider,
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export default Web3ContextProvider;
export { Web3Context };
