// Core
import { ApolloError } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
// import { gql } from 'apollo-boost';

// Types
import { PET_QUERY_AVAILABLE_PETS } from './gql/__generated__/PET_QUERY_AVAILABLE_PETS';

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');
// const queryAvailablePets = gql`
//     query PET_QUERY_AVAILABLE_PETS {
//         availablePet
//     }
// `;

type UseLoaderDataType = {
  loading: boolean;
  data: PET_QUERY_AVAILABLE_PETS;
  error: ApolloError | void;
}

export const useLoaderData = (): UseLoaderDataType => {
  const { loading, error, data } = useQuery(queryAvailablePets);

  return { loading, error, data };
};
