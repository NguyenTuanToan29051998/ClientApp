import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { CustomProvider } from '../AppContext';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  if (typeof window !== 'undefined') {
    const typeUser = localStorage.getItem('type-user') || '';
    if (!typeUser) localStorage.setItem('type-user', '0');
  }

  return (
    <CustomProvider>
      {getLayout(<Component {...pageProps} />)}
    </CustomProvider>
  );
}

export default MyApp;
