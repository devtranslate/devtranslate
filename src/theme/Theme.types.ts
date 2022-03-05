import { Tokens } from './tokens/Tokens.types';

type BrandColors = {
  outline: string;
  lighter: string;
  light: string;
  medium: string;
  dark: string;
};

export type Theme = Tokens & {
  brand: {
    colors: {
      default: string;
      primary: BrandColors;
      secondary: BrandColors;
      tertiary: BrandColors;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
    };
  };
};
