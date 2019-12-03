// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { useState, useEffect, ChangeEvent } from 'react';

// Types
import {
  createAccount,
  createAccountVariables,
  createAccount_createAccount as createAccountEntityType,
} from './gql/__generated__/createAccount';

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

type HandleChangeType = (event: ChangeEvent<HTMLInputElement>) => void;

type UseCreateAccountType = {
  saveAccount: () => void;
  handleChange: HandleChangeType;
  createdAccount: createAccountEntityType | null;
}

export const useCreateAccount = (): UseCreateAccountType => {
  const [addUser, { data }] = useMutation<
    createAccount,
    createAccountVariables
    >(mutationCreateAccount);

  const [createdAccount, updateCreatedAccount] = useState<createAccount>({
    createAccount: null,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      updateCreatedAccount(data);
    }
  }, [data]);

  const [values, setValues] = useState<createAccountVariables>({
    account: {
      name: '',
      username: '',
      password: '',
    },
  });

  const handleChange: HandleChangeType = (event) => {
    event.persist();
    setValues((prevValues) => ({
      account: {
        ...prevValues.account,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const saveAccount = (): void => {
    const { name, username, password } = values.account;

    addUser({
      variables: {
        account: {
          name,
          username,
          password,
        },
      },
    });
  };

  return {
    saveAccount,
    handleChange,
    createdAccount: createdAccount ? createdAccount.createAccount : null,
  };
};
