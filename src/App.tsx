// Core
import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

// Other
import { store } from './init/store';
import { client } from './init/graphqlClient';

import { UserComponent } from './bus/user';

export const App: React.FC = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <UserComponent />
    </ApolloProvider>
  </Provider>
);
