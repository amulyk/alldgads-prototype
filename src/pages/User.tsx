import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { UserComponent } from '../bus/user';

const User: NextPage = (): ReactElement => (
  <h1>
    User page
    <UserComponent />
  </h1>
);

export default User;
