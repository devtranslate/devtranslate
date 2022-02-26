import { Typography } from './Typography.types';

export const typography: Typography = {
  fontFamily: {
    sans: 'Cera Round Pro, Nunito, Quicksand, sans-serif',
    mono: 'Roboto Mono, Ubuntu Mono, Consolas, monospace',
  },
  fontWeights: {
    heading: {
      default: 'bold',
      display: 'normal',
    },
  },
  fontSizes: {
    heading: {
      default: {
        xxs: '20px',
        xs: '24px',
        s: '28px',
        m: '32px',
        l: '36px',
        xl: '40px',
      },
      display: {
        xxs: '44px',
        xs: '48px',
        s: '52px',
        m: '56px',
        l: '60px',
        xl: '64px',
      },
    },
    body: {
      s: '12px',
      m: '14px',
      l: '16px',
    },
  },
  lineHeights: {
    heading: {
      default: {
        xxs: '24px',
        xs: '28px',
        s: '32px',
        m: '36px',
        l: '40px',
        xl: '44px',
      },
      display: {
        xxs: '48px',
        xs: '52px',
        s: '56px',
        m: '60px',
        l: '64px',
        xl: '68px',
      },
    },
    body: {
      s: '16px',
      m: '18px',
      l: '20px',
    },
  },
};
