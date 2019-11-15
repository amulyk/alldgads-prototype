import React from 'react';
import { Provider } from 'react-redux';
import { store } from './init/store';

import { Starships } from './bus/starships';

export const App: React.FC = () => (
  <Provider store={store}>
    <Starships />
  </Provider>
);
