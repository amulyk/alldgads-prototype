// Core
import { ActionCreator, AnyAction } from 'redux';
import { SagaIterator } from '@redux-saga/core';
import {
  put,
  call,
  delay,
  apply,
} from 'redux-saga/effects';

import { FillActionType, ErrorActionType } from '../types';

type OptionsType<T> = {
  fetcher: (uri?: string) => Promise<T>;
  fetcherParam?: string;
  startFetching: ActionCreator<AnyAction>;
  stopFetching: ActionCreator<AnyAction>;
  fill: ActionCreator<AnyAction>;
  setErrorAction: ErrorActionType;
};


export function* makeRequestWithSpinner<T>(options: OptionsType<T>): SagaIterator {
  const {
    fetcher,
    fetcherParam,
    startFetching,
    stopFetching,
    fill,
    setErrorAction,
  } = options;

  try {
    yield put(startFetching());

    const response = yield call(fetcher, fetcherParam);
    const results = { data: response.data.results };

    yield delay(200);
    yield put(fill(results));
  } catch (error) {
    yield put(setErrorAction(error));
  } finally {
    yield put(stopFetching());
  }
}
