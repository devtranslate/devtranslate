import { css, createGlobalStyle } from 'styled-components';
import { Theme } from './theme/Theme.types';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    body {
      color: ${theme.brand.colors.default};
      font-family: ${theme.brand.typography.fontFamily};
      font-size: ${theme.brand.typography.fontSize};
      line-height: ${theme.brand.typography.lineHeight};
    }
  `}
`;
