// Core
import { SagaIterator } from '@redux-saga/core';
import {
  put,
  call,
  delay,
  apply,
} from 'redux-saga/effects';

// Instruments
import {
  startFetching,
  stopFetching,
  fill,
  setFetchingError,
} from '../../actions';

import { api } from '../../../../api';

export function* fetchStarships(): SagaIterator {
  try {
    yield put(startFetching());

    const response = yield call(api.starships.fetch);

    const { results } = yield apply(response, response.json, []);

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    yield delay(200);
    yield put(fill(results));
  } catch (error) {
    yield put(setFetchingError({ status: error }));
  } finally {
    yield put(stopFetching());
  }
}
