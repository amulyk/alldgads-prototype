/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PetStatus } from "./../../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: petProfile
// ====================================================

export interface petProfile_petById {
  __typename: "Cat" | "Dog" | "Rabbit" | "Stingray";
  /**
   * A unique identifier for each `Pet`. This value also serves as a lookup for the `petById` query.
   */
  id: string;
  /**
   * The pet's given name
   */
  name: string;
  /**
   * The weight (in pounds) of the pet in question.
   */
  weight: number | null;
  /**
   * The current checkout status of the pet. Must one of the values of the `PetStatus` enumerator: AVAILABLE or CHECKEDOUT.
   */
  status: PetStatus | null;
}

export interface petProfile {
  /**
   * Use this query to return one `Pet` by ID. If you're not sure what the ID is,
   * send an `allPets` query to find the pet you want to view.
   */
  petById: petProfile_petById;
}

export interface petProfileVariables {
  id: string;
}
