// Types

import {
  Starships,
  STARSHIPS_FILL,
  STARSHIPS_START_FETCHING,
  STARSHIPS_STOP_FETCHING,
  STARSHIPS_SET_FETCHING_ERROR,
  STARSHIPS_FETCH_ASYNC,
  StarshipsActionTypes,
  ErrorHttpAction,
} from './types';

// Sync
export function startFetching(): StarshipsActionTypes {
  return {
    type: STARSHIPS_START_FETCHING,
  };
}

export function stopFetching(): StarshipsActionTypes {
  return {
    type: STARSHIPS_STOP_FETCHING,
  };
}

export function fill(payload: Starships): StarshipsActionTypes {
  return {
    type: STARSHIPS_FILL,
    payload,
  };
}

export function setFetchingError(payload: ErrorHttpAction): StarshipsActionTypes {
  return {
    type: STARSHIPS_SET_FETCHING_ERROR,
    error: true,
    payload,
  };
}

export function fetchAsync(): StarshipsActionTypes {
  return {
    type: STARSHIPS_FETCH_ASYNC,
  };
}
