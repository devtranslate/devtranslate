import { tokens } from './tokens/Tokens';
import { Theme } from './Theme.types';

export const getTheme = (theme?: string): Theme => {
  const { colors, typography } = tokens;

  switch (theme) {
    default:
      return {
        ...tokens,
        textColor: colors.gray[700],
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.body.fontSizes.s,
        brand: {
          primary: colors.red[400],
          secondary: colors.yellow[400],
          tertiary: colors.blueGray[800],
        },
      };
  }
};
