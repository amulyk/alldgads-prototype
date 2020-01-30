// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useQueryAccounts } from './hooks/useQueryAccounts';

export const Users: FC = (): ReactElement => {
  const {
    loading,
    data,
    error,
    getUsers,
  } = useQueryAccounts();

  const load = (): void => {
    getUsers();
  };

  const loaderJSX = loading && (
    <p>Loading...</p>
  );

  const errorJSX = error && (
    <p>
      Error!
      { error.message }
    </p>
  );

  const usersJSX = !loading && !error && data && data.users.map((user, id) => {
    const name = user && user.name;
    const email = user && user.email;
    const password = user && user.password;
    const passwordJSX = password && (
      <p>
        Пароль:
        {password}
      </p>
    );

    return (
      <div key={String(id)}>
        <p>
          Имя:
          {name}
        </p>
        <p>
          Email:
          {email}
        </p>
        {passwordJSX}
      </div>
    );
  });

  return (
    <section>
      <h1>Пользователи</h1>
      <div>
        <button type="submit" onClick={load}>Загрузить всех пользователей</button>
        {loaderJSX}
        {errorJSX}
      </div>
      <div>
        {usersJSX}
      </div>
    </section>
  );
};
