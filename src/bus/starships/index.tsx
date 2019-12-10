import React, { ReactElement } from 'react';
import { useStarshipsFetch } from './hooks/useStarshipsFetch';
import { Title } from '../../elements/title';
import { Starship } from './types';

export const StarshipsComponent = (): ReactElement => {
  const { isFetching, data, error } = useStarshipsFetch();

  const errorMessage = typeof error === 'object' && error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;

  const list = isFetching
    || data.map(
      ({ name }: Starship, index: number): ReactElement => <li key={Number(index)}>{name}</li>,
    );

  return (
    <>
      <Title>Starships</Title>
      {errorMessage}
      {loader}
      {list}
    </>
  );
};
