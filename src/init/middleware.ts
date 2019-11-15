// Core
import { compose } from 'redux';
import { createLogger } from 'redux-logger';
import { customThunk } from './customThunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: (): string => '#1C5FAF',
    action: (): string => '#149945',
    nextState: (): string => '#A47104',
    error: (): string => '#ff0005',
  },
});

const __DEV__ = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const middleware: any = [customThunk];

if (__DEV__) {
  middleware.push(logger);
}

export { composeEnhancers, middleware };
