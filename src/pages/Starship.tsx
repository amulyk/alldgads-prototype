import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { StarshipsComponent } from '../bus/starships';

const Starship: NextPage = (): ReactElement => (
  <h1>
    User page
    <StarshipsComponent />
  </h1>
);

export default Starship;
