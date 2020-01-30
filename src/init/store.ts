/* eslint-disable */
// Core
import { createStore, applyMiddleware } from 'redux';

// Middleware
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable-next-line global-require */
    const { composeWithDevTools } = require('redux-devtools-extension');
    middleware.push(
      createLogger({
        duration:  true,
        timestamp: true,
        collapsed: true,
        diff:      true,
        colors:    {
          title: (action) => {
            return action.error ? 'firebrick' : 'deepskyblue';
          },
          prevState: () => 'dodgerblue',
          action:    () => 'greenyellow',
          nextState: () => 'olivedrab',
          error:     () => 'firebrick',
        },
      }),
    );

    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export const initStore = () => {
  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware]),
  );

  // @ts-ignore
  store.runSagaTask = () => {
    // @ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  // @ts-ignore
  store.runSagaTask();

  return store;
};
/* eslint-enable */
