import { BreakpointsType } from './types';

export const breakpoints: BreakpointsType = [
  {
    name: 'mobile',
    range: {
      max: 667,
    },
  },
  {
    name: 'tablet',
    range: {
      min: 668,
      max: 1024,
    },
  },
  {
    name: 'desktop',
    range: {
      min: 1025,
    },
  },
];
