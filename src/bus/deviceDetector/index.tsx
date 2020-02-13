import React,
{
  FC,
  ReactElement,
} from 'react';

import { useDeviceDetector } from './hooks/useDeviceDetector';
import { useReactiveDeviceDetector } from './hooks/useReactiveDeviceDetector';
import { PropTypes } from './types';

const DeviceDetector: FC<PropTypes> = ({ source }: PropTypes): ReactElement => {
  // const { device } = useDeviceDetector();
  const { device } = useReactiveDeviceDetector();
  const currentDevice = source[device];

  if (!currentDevice) {
    return (
      <p>Loading...</p>
    );
  }

  const DetectedComponent = source[device]();

  return (
    <>
      <h1>
        Device:
        { device }
      </h1>
      <DetectedComponent />
    </>
  );
};

export default DeviceDetector;
