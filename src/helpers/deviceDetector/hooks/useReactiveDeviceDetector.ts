import { useEffect, useState } from 'react';
import { DeviceDetectorType } from '../types';
import { getDeviceByWidth } from '../getDeviceByWidth';

export const useReactiveDeviceDetector = (): DeviceDetectorType => {
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
