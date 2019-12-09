// Core
import { ApolloError } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Types
import { userQueryAccounts } from './gql/__generated__/userQueryAccounts';

// Queries
const queryAccounts = loader('./gql/queryAccounts.graphql');

type UseQueryAccountsType = {
  loading: boolean;
  data?: userQueryAccounts;
  error?: ApolloError;
  getUsers: () => void;
}

export const useQueryAccounts = (): UseQueryAccountsType => {
  const [
    getUsers,
    { loading, error, data },
  ] = useLazyQuery<userQueryAccounts>(queryAccounts, { fetchPolicy: 'network-only' });

  return {
    getUsers,
    loading,
    error,
    data: data && data,
  };
};
