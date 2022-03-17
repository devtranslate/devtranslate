import { css } from 'styled-components';
import { ColumnProps } from './Column.types';
import { getColumnSize } from './Column.helpers';
import { getAlignItems, getJustifyContent } from '../../../helpers/Alignment';
import { getPadding } from '../../../helpers/Spacing';

export const ColumnStyles = css<{
  alignItems?: ColumnProps['alignItems'];
  columnGap?: ColumnProps['columnGap'];
  padding?: ColumnProps['padding'];
  paddingBottom?: ColumnProps['paddingBottom'];
  paddingLeft?: ColumnProps['paddingLeft'];
  paddingRight?: ColumnProps['paddingRight'];
  paddingTop?: ColumnProps['paddingTop'];
  justifyContent?: ColumnProps['justifyContent'];
  xs?: ColumnProps['xs'];
  s?: ColumnProps['s'];
  m?: ColumnProps['m'];
  l?: ColumnProps['l'];
  xl?: ColumnProps['xl'];
}>`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex: 0 auto 100%;
  flex-direction: column;

  ${(props) => css`
    ${getAlignItems(props)};
    ${getJustifyContent(props)};
    ${getColumnSize(props)};
    ${getPadding(props)};
  `};
`;
