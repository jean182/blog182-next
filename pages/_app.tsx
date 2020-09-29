import Layout from 'components/layout';

import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/globals';
import { darkScript } from 'theme/dark-script';
import theme from 'theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#e66992" key="theme" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {isMounted && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
      <script
        dangerouslySetInnerHTML={{
          __html: darkScript
        }}
      />
      ;
    </>
  );
}

export default MyApp;
