// Core
import { SagaIterator } from '@redux-saga/core';
import {
  put,
  call,
  delay,
  apply,
} from 'redux-saga/effects';

export function* makeRequestWithSpinner(options: any): SagaIterator {
  const {
    apiMethod,
    payload,
    startFetching,
    stopFetching,
    fill,
    setErrorAction,
  } = options;

  try {
    yield put(startFetching());

    const response = yield call(apiMethod, payload);

    const { results } = yield apply(response, response.json, []);

    yield delay(200);
    yield put(fill(results));
  } catch (error) {
    yield put(setErrorAction(error));
  } finally {
    yield put(stopFetching());
  }
}
