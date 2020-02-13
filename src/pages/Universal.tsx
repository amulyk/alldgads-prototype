import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import dynamic, { LoadableComponent } from 'next/dynamic';
import DeviceDetector from '../bus/deviceDetector';

const source = {
  mobile: (): LoadableComponent => (
    dynamic(() => import('../bus/mobileHeader'))
  ),
  desktop: (): LoadableComponent => (
    dynamic(() => import('../bus/desktopHeader'))
  ),
  tablet: (): LoadableComponent => (
    dynamic(() => import('../bus/tabletHeader'))
  ),
};

const Universal: NextPage = (): ReactElement => (
  <DeviceDetector source={source} />
);

export default Universal;
