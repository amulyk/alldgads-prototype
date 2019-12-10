// Core
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { middleware, sagaMiddleware } from './middleware';

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export const store = (preloadedState: {}): Store => createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
