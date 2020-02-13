/* eslint-disable */
// Core
import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

// Instruments
import { initStore } from '../init/store';
import withApollo from '../lib/withApollo';
import { appWithTranslation } from '../lib/i18n';

// @ts-ignore
const App = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

// @ts-ignore
// App.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};
//
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps({ ctx });
//   }
//
//   return { pageProps };
// };

// export default (withApollo(withRedux(initStore)(withReduxSaga(appWithTranslation(App)))));
export default (withApollo(withRedux(initStore)(withReduxSaga(App))));
/* eslint-enable */
