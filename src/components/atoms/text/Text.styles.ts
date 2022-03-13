import { css } from 'styled-components';
import { TextProps } from './Text.types';
import { getPadding } from '../../../helpers/Spacing';
import { getTextAlign, getTextSize } from '../../../helpers/Text';

export const TextStyles = css<{
  color?: TextProps['color'];
  lineClamp?: TextProps['lineClamp'];
  padding?: TextProps['padding'];
  paddingBottom?: TextProps['paddingBottom'];
  paddingLeft?: TextProps['paddingLeft'];
  paddingRight?: TextProps['paddingRight'];
  paddingTop?: TextProps['paddingTop'];
  size?: TextProps['size'];
  textAlign?: TextProps['textAlign'];
  textTransform?: TextProps['textTransform'];
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

  ${({ theme, color, textTransform }) => `
    color: ${color ? theme.brand.colors[color].medium : theme.brand.colors.default};
    text-transform: ${textTransform ?? 'none'};
  `}

  ${(props) => css`
    ${getPadding(props)};
    ${getTextSize(props)};
    ${getTextAlign(props)};
  `};
`;
