import React from 'react';
import { NextPage } from 'next';
// import { StarshipsComponent } from '../bus/starships';
// import { withTranslation } from '../lib/i18n';

const Starship: NextPage = () => (
  <h1>
    User page
    {/* <StarshipsComponent /> */}
  </h1>
);

// Starship.getInitialProps = async (): Promise<object> => ({
//   namespacesRequired: ['common'],
// });

// export default withTranslation()(Starship);
export default Starship;
