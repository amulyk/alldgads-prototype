// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { useState, useEffect, ChangeEvent } from 'react';

// Types
import {
  login as Login,
  loginVariables as LoginVariables,
  login_login as loginEntityType,
} from './gql/__generated__/login';

// Mutations
const mutationCreateAccount = loader('./gql/mutationLogin.graphql');

type HandleChangeType = (event: ChangeEvent<HTMLInputElement>) => void;

type UseLoginType = {
  login: () => void;
  handleChange: HandleChangeType;
  authenticatedAccount: loginEntityType | null;
}

export const useLogin = (): UseLoginType => {
  const [loginToServer, { data }] = useMutation<
    Login,
    LoginVariables
    >(mutationCreateAccount);

  const [authenticatedAccount, updateAuthenticatedAccount] = useState<Login>();

  useEffect(() => {
    if (data) {
      updateAuthenticatedAccount(data);
    }
  }, [data]);

  const [values, setValues] = useState<LoginVariables>({
    name: '',
    password: '',
  });

  const handleChange: HandleChangeType = (event) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const login = (): void => {
    const { name, password } = values;

    loginToServer({
      variables: {
        name,
        password,
      },
    });
  };

  return {
    login,
    handleChange,
    authenticatedAccount: authenticatedAccount ? authenticatedAccount.login : null,
  };
};
