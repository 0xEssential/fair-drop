import '../styles/globals.css';

import type { AppProps } from 'next/app';
import React from 'react';

import Web3ContextProvider from '../contexts/web3Context';

const DefaultLayout = ({ children }) => children;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || DefaultLayout;

  return (
    <Web3ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ContextProvider>
  );
}
export default MyApp;
