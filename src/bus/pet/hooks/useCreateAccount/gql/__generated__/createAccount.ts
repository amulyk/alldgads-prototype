/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateAccountInput } from "./../../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createAccount
// ====================================================

export interface createAccount_createAccount {
  __typename: "Customer";
  /**
   * The `Customer`'s name as a string.
   */
  name: string;
}

export interface createAccount {
  /**
   * When you need to create an account at the Pet Library, you'll need to send
   * this mutation. Your name + username + password is all you need to be given
   * dominion over cats, dogs, rabbits, and/or stingrays.
   */
  createAccount: createAccount_createAccount | null;
}

export interface createAccountVariables {
  account: CreateAccountInput;
}
