import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  uri: 'https://funded-pet-library.moonhighway.com/',
  cache: new InMemoryCache(),
});
