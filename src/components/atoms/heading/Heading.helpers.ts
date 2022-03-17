import { css } from 'styled-components';
import { HeadingProps } from './Heading.types';
import { screens } from '../../../theme/tokens/screens/Screens';
import { typography } from '../../../theme/tokens/typography/Typography';

export const getHeadingSize = (props: { variant?: HeadingProps['variant']; size?: HeadingProps['size'] }) => {
  const { variant, size } = props;
  const currentVariant = variant ?? 'default';

  return css`
    ${size &&
    css`
      ${size.xs &&
      css`
        font-size: ${typography.fontSizes.heading[currentVariant][size.xs]};
        line-height: ${typography.lineHeights.heading[currentVariant][size.xs]};
      `}
      ${size.s &&
      css`
        @media (min-width: ${screens.s.min}) {
          font-size: ${typography.fontSizes.heading[currentVariant][size.s]};
          line-height: ${typography.lineHeights.heading[currentVariant][size.s]};
        }
      `}
      ${size.m &&
      css`
        @media (min-width: ${screens.m.min}) {
          font-size: ${typography.fontSizes.heading[currentVariant][size.m]};
          line-height: ${typography.lineHeights.heading[currentVariant][size.m]};
        }
      `}
      ${size.l &&
      css`
        @media (min-width: ${screens.l.min}) {
          font-size: ${typography.fontSizes.heading[currentVariant][size.l]};
          line-height: ${typography.lineHeights.heading[currentVariant][size.l]};
        }
      `}
      ${size.xl &&
      css`
        @media (min-width: ${screens.xl.min}) {
          font-size: ${typography.fontSizes.heading[currentVariant][size.xl]};
          line-height: ${typography.lineHeights.heading[currentVariant][size.xl]};
        }
      `}
    `}
  `;
};
