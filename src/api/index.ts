import { root } from './config';
import { Starships } from '../bus/starships/types';

export const api = Object.freeze({
  starships: {
    fetch: (): Promise<Starships> => fetch(`${root}/starships`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => ({ data })),
  },
});
