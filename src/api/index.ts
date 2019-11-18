import { root } from './config';

export const api = Object.freeze({
  starships: {
    fetch: (): Promise => fetch(`${root}/starships`, {
      method: 'GET',
    }),
  },
  planets: {
    fetch: (): Promise => fetch(`${root}/planets`, {
      method: 'GET',
    }),
  },
});
