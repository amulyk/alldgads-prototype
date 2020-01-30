/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUp
// ====================================================

export interface signUp_signUp {
  __typename: "User";
  name: string;
}

export interface signUp {
  signUp: signUp_signUp;
}

export interface signUpVariables {
  name: string;
  email: string;
  password: string;
}
