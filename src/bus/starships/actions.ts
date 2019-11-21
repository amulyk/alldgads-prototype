// Types

import {
  Starship,
  STARSHIPS_FILL,
  STARSHIPS_START_FETCHING,
  STARSHIPS_STOP_FETCHING,
  STARSHIPS_SET_FETCHING_ERROR,
  STARSHIPS_FETCH_ASYNC,
  StarshipsActionTypes,
  ErrorHttpAction,
  ThunkFunction,
} from './types';
import { api } from '../../api';


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

export function fill(payload: Starship[]): StarshipsActionTypes {
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

export function fetchAsync(): ThunkFunction {
  return async (dispatch): Promise<void> => {
    dispatch({
      type: STARSHIPS_FETCH_ASYNC,
    });

    dispatch(startFetching());

    const response = await api.starships.fetch();

    if (response.status === 200) {
      const { results } = await response.json();

      dispatch(fill(results));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(setFetchingError(error));
    }

    dispatch(stopFetching());
  };
}
