// Core
import React, { ReactElement } from 'react';
import dynamic, { LoadableComponent } from 'next/dynamic';

// Helpers
import DeviceDetector from '../../helpers/deviceDetector';

const source = {
  mobile: (): LoadableComponent => (
    dynamic(() => import('./mobile'), {
      ssr: false,
    })
  ),
  desktop: (): LoadableComponent => (
    dynamic(() => import('./desktop'), {
      ssr: false,
    })
  ),
  tablet: (): LoadableComponent => (
    dynamic(() => import('./tablet'), {
      ssr: false,
    })
  ),
};

const Header = (): ReactElement => (
  <DeviceDetector source={source} />
);

export default Header;
