// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useCreateAccount } from './hooks/useCreateAccount';

// Components
import { Users } from './Users';
import { Login } from './Login';

export const UserComponent: FC = (): ReactElement => {
  const {
    saveAccount,
    handleChange,
    createdAccount,
  } = useCreateAccount();

  const save = (): void => {
    saveAccount();
  };

  const createdAccountJSX = createdAccount && (
    <p>
      Создан пользователь с именем:
      { createdAccount.name }
    </p>
  );

  return (
    <section>
      <div>
        <h1>Регистрация</h1>
        <input type="text" placeholder="name" name="name" onChange={handleChange} />
        <input type="text" placeholder="email" name="email" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <button type="submit" onClick={save}>Создать пользователя</button>
        {createdAccountJSX}
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Users />
      </div>
    </section>
  );
};
