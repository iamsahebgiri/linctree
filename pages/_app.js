import { ChakraProvider } from "@chakra-ui/react"
import { Global, css } from '@emotion/react';
import Head from 'next/head';

import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
