import React, { ReactElement } from 'react';
import { NextPage } from 'next';

import Header from '../bus/header';

const Universal: NextPage = (): ReactElement => (
  <Header />
);

export default Universal;
