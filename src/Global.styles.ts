import { css, createGlobalStyle } from 'styled-components';
import { Theme } from './theme/Theme.types';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      outline-width: 3px;
      outline-offset: ${theme.spacing.xxs};
      outline-color: ${theme.brand.colors.primary.outline};
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
    }

    body {
      margin: 0;
      color: ${theme.brand.colors.default};
      font-family: ${theme.brand.typography.fontFamily};
      font-size: ${theme.brand.typography.fontSize};
      line-height: ${theme.brand.typography.lineHeight};
    }
  `}
`;
