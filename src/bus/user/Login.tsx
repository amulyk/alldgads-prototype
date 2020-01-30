// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useLogin } from './hooks/useLogin';

export const Login: FC = (): ReactElement => {
  const {
    login,
    handleChange,
    authenticatedAccount,
  } = useLogin();

  const authenticatedAccountJSX = authenticatedAccount && (
    <p>
      Залогиненый пользователь:
      { authenticatedAccount.name }
    </p>
  );

  return (
    <section>
      <div>
        <h1>Войти в систему</h1>
        <input type="text" placeholder="name" name="name" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <button type="submit" onClick={login}>Войти</button>
        {authenticatedAccountJSX}
      </div>
    </section>
  );
};
