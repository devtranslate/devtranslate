import { Tokens } from './tokens/Tokens.types';

export type Theme = Tokens & {
  textColor: string;
  fontFamily: string;
  fontSize: string;
  brand: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
};
