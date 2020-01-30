/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * This enumeration type tells us whether or not a pet is checked out. If
 * `AVAILABLE`, a `Customer` can take this pet home. If `CHECKEDOUT`, a `Customer`
 * has to wait for the pet to be returned.
 */
export enum PetStatus {
  AVAILABLE = "AVAILABLE",
  CHECKEDOUT = "CHECKEDOUT",
}

/**
 * When a user creates an account, they must send `name`, `username`, and
 * `password` to the `createAccount` mutation. This input type wraps those fields
 * into one fancy object.
 */
export interface CreateAccountInput {
  name: string;
  username: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
