/* eslint-disable no-case-declarations */
// Types
import {
  StarshipsActionTypes,
  STARSHIPS_START_FETCHING,
  STARSHIPS_STOP_FETCHING,
  STARSHIPS_SET_FETCHING_ERROR,
  STARSHIPS_FILL,
  ErrorHttpAction,
  Starships,
} from './types';

export type StarshipsState = {
  data: Starships | [];
  isFetching: boolean;
  error: false | ErrorHttpAction;
}

const initialState: StarshipsState = {
  data: [],
  isFetching: false,
  error: false,
};

export const starshipsReducer = (
  state = initialState,
  action: StarshipsActionTypes,
): StarshipsState => {
  if (!('type' in action)) {
    return state;
  }
  switch (action.type) {
    case STARSHIPS_START_FETCHING:
      return { ...state, isFetching: true };
    case STARSHIPS_STOP_FETCHING:
      return { ...state, isFetching: false };
    case STARSHIPS_SET_FETCHING_ERROR:
      return { ...state, error: action.payload };
    case STARSHIPS_FILL:
      return { ...state, data: action.payload };

    default:
      const x: never = action; // eslint-disable-line @typescript-eslint/no-unused-vars
  }

  return state;
};
