import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { StarshipsComponent } from '../bus/starships';

import { withTranslation } from '../../i18n';

const Starship: NextPage = (): ReactElement => (
  <h1>
    User page
    <StarshipsComponent />
  </h1>
);

Starship.getInitialProps = () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Starship);
