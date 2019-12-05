// Core
import { ApolloError } from 'apollo-boost';
import { useLazyQuery, QueryLazyOptions } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Types
import { petProfile, petProfileVariables, petProfile_petById as PetProfileType } from './gql/__generated__/petProfile';

// Queries
const queryPetProfile = loader('./gql/queryPetProfile.graphql');

type UseLoaderDataType = {
  loading: boolean;
  data: PetProfileType | undefined;
  error: ApolloError | void;
  getProfile: (options: QueryLazyOptions<petProfileVariables>) => void;
}

export const useQueryPetProfile = (): UseLoaderDataType => {
  const [getProfile, { loading, error, data }] = useLazyQuery<
    petProfile,
    petProfileVariables
    >(queryPetProfile);

  return {
    getProfile,
    loading,
    error,
    data: data && data.petById,
  };
};
