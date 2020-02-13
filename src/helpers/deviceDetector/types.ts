import { LoadableComponent } from 'next/dynamic';

export type DeviceTitleType = 'mobile' | 'tablet' | 'desktop';

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

type SourceType = {
  mobile: () => LoadableComponent;
  tablet: () => LoadableComponent;
  desktop: () => LoadableComponent;
}

export type PropTypes = {
  source: SourceType;
}

export type DeviceDetectorType = {
  device: DeviceTitleType;
};
