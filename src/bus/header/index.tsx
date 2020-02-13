// Core
import React, { ReactElement } from 'react';
import dynamic, { LoadableComponent } from 'next/dynamic';

// Helpers
import DeviceDetector from '../../helpers/deviceDetector';

const source = {
  mobile: (): LoadableComponent => (
    dynamic(() => import('./mobile'))
  ),
  desktop: (): LoadableComponent => (
    dynamic(() => import('./desktop'))
  ),
  tablet: (): LoadableComponent => (
    dynamic(() => import('./tablet'))
  ),
};

const Header = (): ReactElement => (
  <DeviceDetector source={source} />
);

export default Header;
