// Core
import { ApolloError } from 'apollo-boost';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
// import { gql } from 'apollo-boost';

// Types
import { PET_QUERY_AVAILABLE_PETS } from './gql/__generated__/PET_QUERY_AVAILABLE_PETS';
import { PET_QUERY_AVAILABLE_PETS_COPY } from './gql/__generated__/PET_QUERY_AVAILABLE_PETS_COPY';
import {useEffect} from "react";

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');
const queryAvailablePetsCopy = loader('./gql/queryAvailablePetsCopy.graphql');
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
  // const { loading: l, data: temp } = useQuery(queryAvailablePetsCopy);
  const [getPets, { loading: l, data: temp, called }] = useLazyQuery(queryAvailablePetsCopy);

  console.log('hook');

  if (!l) {
    console.log('timer', temp);
  }

  setTimeout(() => {
    getPets();
    console.log('timer', temp);
  }, 2000);

  return { loading, error, data };
};
