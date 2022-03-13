import { css } from 'styled-components';
import { LinkProps } from './Link.types';
import { getPadding } from '../../../helpers/Spacing';
import { getTextAlign, getTextSize } from '../../../helpers/Text';

export const LinkStyles = css<{
  padding?: LinkProps['padding'];
  paddingBottom?: LinkProps['paddingBottom'];
  paddingLeft?: LinkProps['paddingLeft'];
  paddingRight?: LinkProps['paddingRight'];
  paddingTop?: LinkProps['paddingTop'];
  size?: LinkProps['size'];
  textAlign?: LinkProps['textAlign'];
}>`
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
  text-decoration: underline;

  ${({ theme }) => `
    color: ${theme.brand.colors.default};

    &:hover {
      color: ${theme.brand.colors.primary.medium};
    }
  `}

  ${(props) => css`
    ${getPadding(props)};
    ${getTextAlign(props)};
    ${getTextSize(props)};
  `};
`;
