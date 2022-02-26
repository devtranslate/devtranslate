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
              light: colors.red[300],
              medium: colors.red[400],
              dark: colors.red[500],
            },
            secondary: {
              light: colors.yellow[300],
              medium: colors.yellow[400],
              dark: colors.yellow[500],
            },
            tertiary: {
              light: colors.blueGray[700],
              medium: colors.blueGray[800],
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
