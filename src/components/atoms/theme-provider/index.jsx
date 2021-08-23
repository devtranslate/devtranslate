import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import getColors from './colors';

const theme = {
  colors: getColors(),
  breakpoints: {
    mobile: '768px',
    tablet: '769px',
    touch: '1023px',
    desktop: '1024px',
    widescreen: '1216px',
    fullhd: '1408px',
  },
  elevation: {
    skim: '0px 0px 4px 0 rgba(0,0,0,0.07)',
    lifted: '0 4px 8px 0 rgba(0,0,0,0.1)',
    raised: '0 6px 12px 0 rgba(0,0,0,0.1)',
    floatin: '0 8px 16px 0 rgba(0,0,0,0.1)',
  },
  borderRadius: {
    xxs: '4px',
    xs: '8px',
    sm: '10px',
    md: '12px',
    lg: '14px',
    xl: '16px',
    xxl: '20px',
    rounded: '50%',
  },
  spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px',
  },
  fontSize: {
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '26px',
    xxl: '32px',
  },
  fontFamily: 'Cera Round Pro, sans-serif',
  fontWeight: {
    light: '300',
    regular: 'normal',
    bold: '500',
  },
};

const ThemeProvider = ({ children }) => {
  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};

export default ThemeProvider;
