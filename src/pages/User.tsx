import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { UserComponent } from '../bus/user';

// eslint-disable-next-line import/no-unresolved,@typescript-eslint/ban-ts-ignore
// @ts-ignore
import { withNamespaces } from '../i18n';

const User: NextPage = (): ReactElement => (
  <h1>
    User page
    <UserComponent />
  </h1>
);

type InitialPropsType = {
  namespacesRequired: [string];
};

User.getInitialProps = async (): Promise<InitialPropsType> => ({
  namespacesRequired: ['common'],
});

export default withNamespaces('common')(User);
