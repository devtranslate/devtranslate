import { css, createGlobalStyle } from 'styled-components';
import getResetCssStyles from './reset-css';

type ThemeType = {
  theme: {
    colors: {
      primary: {
        medium: string;
      };
    };
    fontFamily: string;
  };
};

const GlobalStyle = createGlobalStyle<ThemeType>`
  @font-face {
    font-family: 'Cera Round Pro';
    src: url('https://devtranslate.io/assets/fonts/CeraRoundPro-Light.woff2') format('woff2'),
      url('https://devtranslate.io/assets/fonts/CeraRoundPro-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cera Round Pro';
    src: url('https://devtranslate.io/assets/fonts/CeraRoundPro-Medium.woff2') format('woff2'),
      url('https://devtranslate.io/assets/fonts/CeraRoundPro-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cera Round Pro';
    src: url('https://devtranslate.io/assets/fonts/CeraRoundPro-Regular.woff2') format('woff2'),
      url('https://devtranslate.io/assets/fonts/CeraRoundPro-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ${getResetCssStyles()}

  ${({ theme }) => css`
    *,
    body,
    input {
      outline-color: ${theme.colors.primary.medium};
      font-family: ${theme.fontFamily};
      text-decoration: none;
    }
  `}

`;

export default GlobalStyle;
