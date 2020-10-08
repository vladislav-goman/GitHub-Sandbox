import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';
import store from '../src/redux/store';
import '../src/styles/reset.css';
import '../src/styles/fonts.css';
import 'antd/dist/antd.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>GitHub Sandbox</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}
