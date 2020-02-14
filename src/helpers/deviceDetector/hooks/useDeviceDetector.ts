import { useEffect, useState } from 'react';
import { DeviceDetectorHookType } from '../types';
import { getDeviceByWidth } from '../getDeviceByWidth';

export const useDeviceDetector = (): DeviceDetectorHookType => {
  const [device, setDevice] = useState();

  useEffect(() => {
    const title = getDeviceByWidth(window.innerWidth);
    setDevice(title);
  }, []);

  return {
    device,
  };
};
