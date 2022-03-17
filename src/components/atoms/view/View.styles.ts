import { css } from 'styled-components';
import { ViewProps } from './View.types';
import { getInline } from '../../../helpers/Inline';
import { getPadding } from '../../../helpers/Spacing';

export const ViewStyles = css<{
  inline?: ViewProps['inline'];
  padding?: ViewProps['padding'];
  paddingBottom?: ViewProps['paddingBottom'];
  paddingLeft?: ViewProps['paddingLeft'];
  paddingRight?: ViewProps['paddingRight'];
  paddingTop?: ViewProps['paddingTop'];
}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${(props) => css`
    ${getInline(props)};
    ${getPadding(props)};
  `};
`;
