import React, { FC, ReactElement } from 'react';
import { useLoaderData } from './hooks/useLoaderData';

export const Pet: FC = (): ReactElement => {
  const { loading, data } = useLoaderData();

  if (loading) {
    return <p>Loading...</p>;
  }
  // if (error) return `Error! ${error.message}`;

  return (
    <section>
      <h1>Pets</h1>
      <p>
        AvailablePets:
        {data.availablePets}
      </p>
    </section>
  );
};
