/* eslint-disable */
// Core
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

// Instruments
import { initStore } from '../init/store';
import withApollo from '../lib/withApollo';
import { appWithTranslation } from '../lib/i18n';

class AppWrapper extends App {
  // @ts-ignore
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    // @ts-ignore
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store = { store }>
        <Component { ...pageProps } />
      </Provider>
    );
  }
}

export default (withApollo(withRedux(initStore)(withReduxSaga(appWithTranslation(AppWrapper)))));
/* eslint-enable */
