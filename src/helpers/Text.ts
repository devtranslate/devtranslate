import { css } from 'styled-components';
import { screens } from '../theme/tokens/screens/Screens';
import { ScreenMap } from '../theme/tokens/screens/Screens.types';
import { typography } from '../theme/tokens/typography/Typography';
import { TypographyBodySizes } from '../theme/tokens/typography/Typography.types';

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

export const getTextSize = (props: { size?: ScreenMap<TypographyBodySizes> }) => {
  const { size } = props;

  return css`
    ${size &&
    css`
      ${size.xs &&
      css`
        font-size: ${typography.fontSizes.body[size.xs]};
        line-height: ${typography.lineHeights.body[size.xs]};
      `}
      ${size.s &&
      css`
        @media (min-width: ${screens.s.min}) {
          font-size: ${typography.fontSizes.body[size.s]};
          line-height: ${typography.lineHeights.body[size.s]};
        }
      `}
      ${size.m &&
      css`
        @media (min-width: ${screens.m.min}) {
          font-size: ${typography.fontSizes.body[size.m]};
          line-height: ${typography.lineHeights.body[size.m]};
        }
      `}
      ${size.l &&
      css`
        @media (min-width: ${screens.l.min}) {
          font-size: ${typography.fontSizes.body[size.l]};
          line-height: ${typography.lineHeights.body[size.l]};
        }
      `}
      ${size.xl &&
      css`
        @media (min-width: ${screens.xl.min}) {
          font-size: ${typography.fontSizes.body[size.xl]};
          line-height: ${typography.lineHeights.body[size.xl]};
        }
      `}
    `}
  `;
};
