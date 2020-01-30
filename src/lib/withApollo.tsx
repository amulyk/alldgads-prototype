import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import initApollo from './initApollo'

// Gets the display name of a JSX component for dev tools
// @ts-ignore
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}
// @ts-ignore
export default ComposedComponent => {
  return class WithApollo extends React.Component {
    static displayName = `WithApollo(${getComponentDisplayName(
      ComposedComponent
    )})`
    static propTypes = {
      serverState: PropTypes.object.isRequired,
    }

    // @ts-ignore
    static async getInitialProps(ctx) {
      // Initial serverState with apollo (empty)
      let serverState = {
        apollo: {
          data: {},
        },
      }

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (typeof window === 'undefined') {
        // @ts-ignore
        const apollo = initApollo()

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent {...composedInitialProps} />
            </ApolloProvider>,
            {
              router: {
                asPath: ctx.asPath,
                pathname: ctx.pathname,
                query: ctx.query,
              },
            }
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()

        // Extract query data from the store
        const state = {}

        // Extract query data from the Apollo store
        serverState = Object.assign(state, {
          apollo: { data: apollo.cache.extract() },
        })
      }

      return {
        serverState,
        ...composedInitialProps,
      }
    }

    // @ts-ignore
    constructor(props) {
      super(props)
      // console.log(this);
      // @ts-ignore
      this.apollo = initApollo(props.serverState.apollo.data)
    }

    render() {
      return (
        // @ts-ignore
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
