import { css } from 'styled-components';
import { HeadingProps } from './Heading.types';
import { getHeadingSize } from './Heading.helpers';
import { getPadding } from '../../../helpers/Spacing';
import { getTextAlign } from '../../../helpers/Text';

export const HeadingStyles = css<{
  children: HeadingProps['children'];
  color?: HeadingProps['color'];
  lineClamp?: HeadingProps['lineClamp'];
  padding?: HeadingProps['padding'];
  paddingBottom?: HeadingProps['paddingBottom'];
  paddingLeft?: HeadingProps['paddingLeft'];
  paddingRight?: HeadingProps['paddingRight'];
  paddingTop?: HeadingProps['paddingTop'];
  size?: HeadingProps['size'];
  textAlign?: HeadingProps['textAlign'];
  textTransform?: HeadingProps['textTransform'];
  variant?: HeadingProps['variant'];
}>`
  margin: 0;
  margin-block: 0;
  margin-inline: 0;

  ${({ lineClamp }) =>
    lineClamp &&
    `
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
    `}

  ${({ theme, color, textTransform, variant, children }) =>
    (typeof children === 'string' || Array.isArray(children)) &&
    css`
      color: ${color ? theme.brand.colors[color].medium : theme.brand.colors.default};
      font-weight: ${theme.typography.fontWeights.heading[variant ?? 'default']};
      font-size: ${theme.typography.fontSizes.heading[variant ?? 'default'].m};
      line-height: ${theme.typography.lineHeights.heading[variant ?? 'default'].m};
      text-transform: ${textTransform ?? 'none'};
    `}

  ${(props) => css`
    ${getPadding(props)};
    ${getHeadingSize(props)};
    ${getTextAlign(props)};
  `};
`;
