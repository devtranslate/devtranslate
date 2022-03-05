import { tokens } from './tokens/Tokens';
import { Theme } from './Theme.types';

export const getTheme = (theme?: string): Theme => {
  const { colors, typography } = tokens;

  switch (theme) {
    default:
      return {
        ...tokens,
        brand: {
          colors: {
            default: colors.gray[700],
            primary: {
              outline: colors.red[100],
              lighter: colors.red[50],
              light: colors.red[300],
              medium: colors.red[400],
              dark: colors.red[500],
            },
            secondary: {
              outline: colors.yellow[100],
              lighter: colors.yellow[50],
              light: colors.yellow[300],
              medium: colors.yellow[400],
              dark: colors.yellow[500],
            },
            tertiary: {
              outline: colors.blueGray[100],
              lighter: colors.blueGray[50],
              light: colors.blueGray[500],
              medium: colors.blueGray[700],
              dark: colors.blueGray[900],
            },
          },
          typography: {
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSizes.body.m,
            lineHeight: typography.lineHeights.body.m,
          },
        },
      };
  }
};
