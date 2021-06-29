import { css, createGlobalStyle } from 'styled-components';
import getResetCssStyles from './reset-css';

const GlobalStyle = createGlobalStyle`
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
    * {
      outline-color: ${theme.colors.primary.medium};
    }

    body {
      font-family: ${theme.fontFamily};
    }
  `}

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
