// Core
import { all } from 'redux-saga/effects';

// Watchers
import { watchStarships } from '../bus/starships/saga/watchers';

export function* rootSaga(): Generator {
  yield all([watchStarships()]);
}
