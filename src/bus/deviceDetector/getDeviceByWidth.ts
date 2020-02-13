import { DeviceTitleType } from './types';
import { breakpoints } from './breakpoints';

export const getDeviceByWidth = (width: number): DeviceTitleType => {
  const breakpoint = breakpoints.find(({ range }) => {
    const min = 'min' in range ? range.min : 0;
    const max = 'max' in range ? range.max : Infinity;

    return width >= min && width <= max;
  });

  const name = breakpoint && breakpoint.name;

  if (!name) {
    throw new Error('We can\'t recognize device');
  }

  return name;
};
