import React, { ReactElement } from 'react';
import { useStarshipsFetch } from './hooks/useStarshipsFetch';
import { Title } from '../../common/title';

export const Starships = (): ReactElement => {
  const { isFetching, data, error } = useStarshipsFetch();

  const errorMessage = typeof error === 'object' && error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;

  // const list = isFetching || data.map(({ name }: Starship, index: number) => (
  //   <li key={Number(index)}>{name}</li>
  // ));
  console.log(data);

  return (
    <>
      <Title>Starships</Title>
      {errorMessage}
      {loader}
    </>
  );
};
