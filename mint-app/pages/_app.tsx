import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import React from 'react';

import Web3ContextProvider from '../contexts/web3Context';

const DefaultLayout = ({ children }) => children;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || DefaultLayout;

  return (
    <Provider>
      <Web3ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ContextProvider>
    </Provider>
  );
}
export default MyApp;
