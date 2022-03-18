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
        xxs: '32px',
        xs: '36px',
        s: '40px',
        m: '44px',
        l: '48px',
        xl: '52px',
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
        xxs: '36px',
        xs: '40px',
        s: '44px',
        m: '48px',
        l: '52px',
        xl: '56px',
      },
    },
    body: {
      s: '18px',
      m: '20px',
      l: '22px',
    },
  },
};
