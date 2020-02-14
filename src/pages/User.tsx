import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
// import { withTranslation } from '../lib/i18n';
// import UserComponent from '../bus/user';

const UserComponent = dynamic(() => import('../bus/user'), {
  loading: () => (
    <p>Loading...</p>
  ),
});

const User: NextPage = () => (
  <h1>
    User page
    <UserComponent />
  </h1>
);

// Customer.getInitialProps = async (): Promise<object> => ({
//   namespacesRequired: ['common'],
// });

// export default withTranslation()(Customer);
export default User;
