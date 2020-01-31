import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { StarshipsComponent } from '../bus/starships';

// eslint-disable-next-line import/no-unresolved,@typescript-eslint/ban-ts-ignore
// @ts-ignore
import { withNamespaces } from '../i18n';

const Starship: NextPage = (): ReactElement => (
  <h1>
    User page
    <StarshipsComponent />
  </h1>
);

type InitialPropsType = {
  namespacesRequired: [string];
};

Starship.getInitialProps = async (): Promise<InitialPropsType> => ({
  namespacesRequired: ['common'],
});

export default withNamespaces('common')(Starship);
