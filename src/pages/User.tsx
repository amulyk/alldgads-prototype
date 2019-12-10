import React, { ReactElement } from 'react';
import { NextPage } from 'next';
// import withApollo from '../lib/withApollo';
import { UserComponent } from '../bus/user';

const User: NextPage = (): ReactElement => (
  <h1>
    User page
    <UserComponent />
  </h1>
);

// const ImprovedComponent = withApollo(User);

export default User;
