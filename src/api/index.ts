import { root } from './config';

export const api = Object.freeze({
  starships: {
    fetch: (): Promise<Response> => fetch(`${root}/starships`, {
      method: 'GET',
    }),
  },
  planets: {
    fetch: (): Promise<Response> => fetch(`${root}/planets`, {
      method: 'GET',
    }),
  },
});
