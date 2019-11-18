import React, { ReactNode } from 'react';
import { useStarshipsFetch } from './hooks/useStarshipsFetch';
import { Starship } from './types';
import { Title } from '../../common/title';

export const Starships = (): ReactNode => {
  const { isFetching, data, error } = useStarshipsFetch();

  const errorMessage = error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;

  const list = isFetching || data.map(({ name }: Starship, index: number) => (
    <li key={Number(index)}>{name}</li>
  ));

  return (
    <>
      <Title>Starships</Title>
      {errorMessage}
      {loader}
      {list}
    </>
  );
};
