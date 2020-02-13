import { useEffect, useState } from 'react';
import { DeviceDetectorType } from '../types';
import { getDeviceByWidth } from '../getDeviceByWidth';

export const useDeviceDetector = (): DeviceDetectorType => {
  const [device, setDevice] = useState();

  useEffect(() => {
    const title = getDeviceByWidth(window.innerWidth);
    setDevice(title);
  }, []);

  return {
    device,
  };
};
