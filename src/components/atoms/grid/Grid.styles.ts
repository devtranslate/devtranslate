import { css } from 'styled-components';
import { GridProps } from './Grid.types';
import { getJustifyContent } from '../../../helpers/Alignment';
import { getPadding } from '../../../helpers/Spacing';

export const GridStyles = css<{
  container?: GridProps['container'];
  padding?: GridProps['padding'];
  paddingBottom?: GridProps['paddingBottom'];
  paddingLeft?: GridProps['paddingLeft'];
  paddingRight?: GridProps['paddingRight'];
  paddingTop?: GridProps['paddingTop'];
  justifyContent?: GridProps['justifyContent'];
}>`
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  flex-direction: row;
  box-sizing: border-box;

  ${({ theme, container }) =>
    container &&
    css`
      max-width: ${theme.screens.l.min};
      margin: 0 auto;
    `};

  ${(props) => css`
    ${getJustifyContent(props)};
    ${getPadding(props)};
  `};
`;
