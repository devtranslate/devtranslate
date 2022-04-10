import { css } from 'styled-components';
import { HeadingProps } from './Heading.types';
import { screens } from '../../../theme/tokens/screens/Screens';
import { typography } from '../../../theme/tokens/typography/Typography';

export const getHeadingSize = (props: { size?: HeadingProps['size'] }) => {
  const { size } = props;

  return css`
    ${size &&
    css`
      ${size.xs &&
      css`
        font-size: ${typography.fontSizes.heading[size.xs]};
        line-height: ${typography.lineHeights.heading[size.xs]};
      `}
      ${size.s &&
      css`
        @media (min-width: ${screens.s.min}) {
          font-size: ${typography.fontSizes.heading[size.s]};
          line-height: ${typography.lineHeights.heading[size.s]};
        }
      `}
      ${size.m &&
      css`
        @media (min-width: ${screens.m.min}) {
          font-size: ${typography.fontSizes.heading[size.m]};
          line-height: ${typography.lineHeights.heading[size.m]};
        }
      `}
      ${size.l &&
      css`
        @media (min-width: ${screens.l.min}) {
          font-size: ${typography.fontSizes.heading[size.l]};
          line-height: ${typography.lineHeights.heading[size.l]};
        }
      `}
      ${size.xl &&
      css`
        @media (min-width: ${screens.xl.min}) {
          font-size: ${typography.fontSizes.heading[size.xl]};
          line-height: ${typography.lineHeights.heading[size.xl]};
        }
      `}
    `}
  `;
};
