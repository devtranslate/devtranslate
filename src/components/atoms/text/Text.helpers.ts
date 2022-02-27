import { css } from 'styled-components';
import { TextProps } from './Text.types';
import { screens } from '../../../theme/tokens/screens/Screens';
import { typography } from '../../../theme/tokens/typography/Typography';

export const getTextSize = (props: { size?: TextProps['size'] }) => {
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
