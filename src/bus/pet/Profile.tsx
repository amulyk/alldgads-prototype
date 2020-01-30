// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useQueryPetProfile } from './hooks/useQueryPetProfile';

export const Profile: FC = (): ReactElement => {
  const {
    loading,
    data,
    error,
    getProfile,
  } = useQueryPetProfile();

  const loaderJSX = loading && (
    <p>Loading...</p>
  );

  const errorJSX = error && (
    <p>
      Error!
      { error.message }
    </p>
  );

  const contentJSX = !loading && !error && data && (
    <>
      <p>
        Id:
        { data.id }
      </p>
      <p>
        Name:
        { data.name }
      </p>
      <p>
        Weight:
        { data.weight }
      </p>
    </>
  );

  const getSpecialPet = (): void => {
    getProfile({
      variables: {
        id: 'C-1',
      },
    });
  };

  return (
    <>
      <h1>Pet Profile</h1>
      <button type="submit" onClick={getSpecialPet}>Download</button>
      {contentJSX}
      {loaderJSX}
      {errorJSX}
    </>
  );
};
