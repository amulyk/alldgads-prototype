/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userQueryAccounts
// ====================================================

export interface userQueryAccounts_users {
  __typename: "User";
  name: string;
  email: string;
  password: string | null;
}

export interface userQueryAccounts {
  users: (userQueryAccounts_users | null)[];
}
