import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { withRedux } from '../lib/redux';
import { StarshipsComponent } from '../bus/starships';

const Starship: NextPage = (): ReactElement => (
  <h1>
    User page
    <StarshipsComponent />
  </h1>
);

export default withRedux(Starship);
