import classnames from 'classnames';
import CSS from 'csstype';
import React, { ReactElement, useContext } from 'react';

import { Web3Context } from '../../contexts/web3Context';
import styles from './styles.module.css';

const chainArgs = {
  '5': {
    chainId: '0x5',
  },
  '137': {
    chainId: '0x89',
    chainName: 'Matic Mainnet',
    rpcUrls: ['https://polygon-rpc.com/'],
    iconUrls: [],
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://polygonscan.com/'],
  },
  '80001': {
    chainId: '0x13881',
    chainName: 'Mumbai Testnet',
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
    iconUrls: [],
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
};

const SwitchNetworkButton = ({
  chainId,
  children,
  _className,
  disabled,
  style,
}: {
  chainId: string;
  children: ReactElement | string;
  _className?: string;
  disabled?: boolean;
  style?: CSS.Properties;
}): ReactElement => {
  const { provider } = useContext(Web3Context);

  return (
    <button
      onClick={async () =>
        chainId === process.env.L1_CHAIN_ID
          ? await provider.send('wallet_switchEthereumChain', [
              chainArgs[chainId],
            ])
          : await provider.send('wallet_addEthereumChain', [chainArgs[chainId]])
      }
      className={classnames(styles.root)}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default SwitchNetworkButton;
