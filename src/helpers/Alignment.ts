import { css } from 'styled-components';
import { screens } from '../theme/tokens/screens/Screens';
import { ScreenMap } from '../theme/tokens/screens/Screens.types';

export const getAlignItems = (props: { alignItems?: ScreenMap<React.CSSProperties['alignItems']> }) => {
  const { alignItems } = props;

  return css`
    ${alignItems &&
    css`
      ${alignItems.xs &&
      css`
        align-items: ${alignItems.xs};
      `}
      ${alignItems.s &&
      css`
        @media (min-width: ${screens.s.min}) {
          align-items: ${alignItems.s};
        }
      `}
      ${alignItems.m &&
      css`
        @media (min-width: ${screens.m.min}) {
          align-items: ${alignItems.m};
        }
      `}
      ${alignItems.l &&
      css`
        @media (min-width: ${screens.l.min}) {
          align-items: ${alignItems.l};
        }
      `}
      ${alignItems.xl &&
      css`
        @media (min-width: ${screens.xl.min}) {
          align-items: ${alignItems.xl};
        }
      `}
    `}
  `;
};

export const getJustifyContent = (props: { justifyContent?: ScreenMap<React.CSSProperties['justifyContent']> }) => {
  const { justifyContent } = props;

  return css`
    ${justifyContent &&
    css`
      ${justifyContent.xs &&
      css`
        justify-content: ${justifyContent.xs};
      `}
      ${justifyContent.s &&
      css`
        @media (min-width: ${screens.s.min}) {
          justify-content: ${justifyContent.s};
        }
      `}
      ${justifyContent.m &&
      css`
        @media (min-width: ${screens.m.min}) {
          justify-content: ${justifyContent.m};
        }
      `}
      ${justifyContent.l &&
      css`
        @media (min-width: ${screens.l.min}) {
          justify-content: ${justifyContent.l};
        }
      `}
      ${justifyContent.xl &&
      css`
        @media (min-width: ${screens.xl.min}) {
          justify-content: ${justifyContent.xl};
        }
      `}
    `}
  `;
};
