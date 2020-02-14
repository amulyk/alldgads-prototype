import { useEffect, useState } from 'react';
import { DeviceDetectorHookType } from '../types';
import { getDeviceByWidth } from '../getDeviceByWidth';

export const useReactiveDeviceDetector = (): DeviceDetectorHookType => {
  const [device, setDevice] = useState();

  useEffect(() => {
    const recognizeDevice = (): void => {
      const title = getDeviceByWidth(window.innerWidth);
      setDevice(title);
    };

    recognizeDevice();

    window.addEventListener('resize', recognizeDevice);

    return (): void => {
      window.removeEventListener('resize', recognizeDevice);
    };
  }, []);

  return {
    device,
  };
};
