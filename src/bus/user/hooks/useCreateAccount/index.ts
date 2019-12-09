// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { useState, useEffect, ChangeEvent } from 'react';

// Types
import {
  signUp,
  signUpVariables,
  signUp_signUp as createAccountEntityType,
} from './gql/__generated__/signUp';

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
    signUp,
    signUpVariables
    >(mutationCreateAccount);

  const [createdAccount, updateCreatedAccount] = useState<signUp>();

  useEffect(() => {
    if (data) {
      updateCreatedAccount(data);
    }
  }, [data]);

  const [values, setValues] = useState<signUpVariables>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange: HandleChangeType = (event) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const saveAccount = (): void => {
    const { name, email, password } = values;

    addUser({
      variables: {
        name,
        email,
        password,
      },
    });
  };

  return {
    saveAccount,
    handleChange,
    createdAccount: createdAccount ? createdAccount.signUp : null,
  };
};
