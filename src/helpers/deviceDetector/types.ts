import { LoadableComponent } from 'next/dynamic';
import { ReactElement } from 'react';

export type DeviceTitleType = 'mobile' | 'tablet' | 'desktop';
export type DynamicComponent = () => LoadableComponent;

type MinRangeType = {
  min: number;
}

type MaxRangeType = {
  max: number;
}

export type BreakpointType = {
  name: DeviceTitleType;
  range: MinRangeType | MaxRangeType;
};

export type BreakpointsType = Array<BreakpointType>;

type MobileType = {
  mobile: DynamicComponent;
};

type TabletType = {
  tablet: DynamicComponent;
};

type DesktopType = {
  desktop: DynamicComponent;
};

export type PropTypes = {
  source: {
    mobile: DynamicComponent;
    tablet: DynamicComponent;
    desktop: DynamicComponent;
  };
}

export type DeviceDetectorHookType = {
  device: DeviceTitleType;
};
