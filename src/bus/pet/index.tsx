// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useLoaderData } from './hooks/useLoaderData';
import { useCreateAccount } from './hooks/useCreateAccount';

// Components
import { Profile } from './Profile';

export const Pet: FC = (): ReactElement => {
  const { loading, error, data } = useLoaderData();
  const {
    saveAccount,
    handleChange,
    createdAccount,
  } = useCreateAccount();

  const save = (): void => {
    saveAccount();
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <p>
        Error!
        {error.message}
      </p>
    );
  }

  const createdAccountJSX = createdAccount && (
    <p>
      Создан пользователь с именем:
      { createdAccount.name }
    </p>
  );

  return (
    <section>
      <h1>Pets</h1>
      <p>
        AvailablePets:
        {data.availablePets}
      </p>
      <input type="text" placeholder="name" name="name" onChange={handleChange} />
      <input type="text" placeholder="username" name="username" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={save}>Save</button>
      { createdAccountJSX }
      <Profile />
    </section>
  );
};
