import { css } from 'styled-components';
import { screens } from '../theme/tokens/screens/Screens';
import { ScreenMap } from '../theme/tokens/screens/Screens.types';

export const getTextAlign = (props: { textAlign?: ScreenMap<React.CSSProperties['textAlign']> }) => {
  const { textAlign } = props;

  return css`
    ${textAlign &&
    css`
      ${textAlign.xs &&
      css`
        text-align: ${textAlign.xs};
      `}
      ${textAlign.s &&
      css`
        @media (min-width: ${screens.s.min}) {
          text-align: ${textAlign.s};
        }
      `}
      ${textAlign.m &&
      css`
        @media (min-width: ${screens.m.min}) {
          text-align: ${textAlign.m};
        }
      `}
      ${textAlign.l &&
      css`
        @media (min-width: ${screens.l.min}) {
          text-align: ${textAlign.l};
        }
      `}
      ${textAlign.xl &&
      css`
        @media (min-width: ${screens.xl.min}) {
          text-align: ${textAlign.xl};
        }
      `}
    `}
  `;
};
