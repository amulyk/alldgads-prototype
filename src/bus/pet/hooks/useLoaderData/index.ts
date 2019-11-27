// Core
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_AVAILABLE_PETS = gql`
    {
        availablePets
    }
`;

type UseLoaderDataType = {
  loading: boolean;
  data: {
    availablePets: number;
  };
}

export const useLoaderData = (): UseLoaderDataType => {
  const { loading, data } = useQuery(GET_AVAILABLE_PETS);

  return { loading, data };
};
