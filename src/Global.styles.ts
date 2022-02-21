import { css, createGlobalStyle } from 'styled-components';
import { Theme } from './theme/Theme.types';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    body {
      color: ${theme.textColor};
      font-family: ${theme.fontFamily};
      font-size: ${theme.fontSize};
    }
  `}
`;
