import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import ReactGA from 'react-ga';
import { PageTransition } from 'next-page-transitions';
import { NextPage } from 'next';

import { GlobalStyles, theme } from 'styles';

import '@fontsource/roboto';

const year = new Date().getFullYear();

Router.events.on('routeChangeComplete', () => {
  ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
});

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID as string);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Home of the Zhelan Cardigans</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GlobalStyles />

      <MainLayoutContainer>
        <StyledMain>
          <PageTransition timeout={200} classNames="page-transition" skipInitialTransition>
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </StyledMain>
      </MainLayoutContainer>
    </ThemeProvider>
  );
};

const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 100vh;
`;
const StyledMain = styled.main``;

export default App;
