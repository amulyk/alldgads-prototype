import React from 'react';
import { useStarshipsFetch } from './hooks/useStarshipsFetch';
import { Title } from '../../common/title';

export const Starships = () => {
  const { isFetching, data, error } = useStarshipsFetch();

  const errorMessage = error.status === 404 && (
    <p>Not found!</p>
  );

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  const list = isFetching || data.map(({name}, index) => (
    <li key={index}>{name}</li>
  ));

  return (
    <>
      <Title>Starships</Title>
      {errorMessage}
      {loader}
      {list}
    </>
  )
};
