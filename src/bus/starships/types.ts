import { ThunkDispatch } from 'redux-thunk';

export type Starship = {
  name: string;
};

export type Starships = {
  data: Starship[];
};

export type ErrorHttpAction = {
  status: number;
};

export type ThunkFunction = (dispatch: ThunkDispatch<MyState, void, Actions>) => Promise<void>;

// Sync
export const STARSHIPS_START_FETCHING = 'STARSHIPS_START_FETCHING';
type StarshipsStartFetchingAction = {
  type: typeof STARSHIPS_START_FETCHING;
};

export const STARSHIPS_STOP_FETCHING = 'STARSHIPS_STOP_FETCHING';
type StarshipsStopFetchingAction = {
  type: typeof STARSHIPS_STOP_FETCHING;
};

export const STARSHIPS_FILL = 'STARSHIPS_FILL';
type StarshipsFillAction = {
  type: typeof STARSHIPS_FILL;
  payload: Starships;
};

export const STARSHIPS_SET_FETCHING_ERROR = 'STARSHIPS_SET_FETCHING_ERROR';
type StarshipsSetFetchingErrorAction = {
  type: typeof STARSHIPS_SET_FETCHING_ERROR;
  error: true;
  payload: ErrorHttpAction;
};
// Async
export const STARSHIPS_FETCH_ASYNC = 'STARSHIPS_FETCH_ASYNC';
type StarshipsFetchAsyncAction = ThunkFunction;

export type StarshipsActionTypes =
  | StarshipsStartFetchingAction
  | StarshipsStopFetchingAction
  | StarshipsFillAction
  | StarshipsSetFetchingErrorAction
  | StarshipsFetchAsyncAction;
