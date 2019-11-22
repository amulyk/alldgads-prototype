// Instruments
import {
  startFetching,
  stopFetching,
  fill,
  setFetchingError,
} from '../../actions';

import { api } from '../../../../api';
import { makeRequestWithSpinner } from '../../../../workers';

export function* fetchStarships(): Generator {
  const options = {
    apiMethod: api.starships.fetch,
    payload: undefined,
    startFetching,
    stopFetching,
    fill,
    setErrorAction: setFetchingError,
  };

  yield makeRequestWithSpinner(options);
}
