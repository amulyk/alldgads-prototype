import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'

// @ts-ignore
let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (typeof window === 'undefined') {
  // @ts-ignore
  global.fetch = fetch
}

// @ts-ignore
function create(initialState) {
  const isBrowser = typeof window !== 'undefined'
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'http://localhost:4000/', // Server URL (must be absolute)
      credentials: 'include', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

// @ts-ignore
export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState)
  }

  // Reuse client on the client-side
  // @ts-ignore
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  // @ts-ignore
  return apolloClient
}
