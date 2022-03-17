import { css } from 'styled-components';
import { IconProps } from './Icon.types';

export const IconStyles = css<{
  color?: IconProps['color'];
  rotate?: IconProps['rotate'];
}>`
  ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`}
  ${({ theme, color }) =>
    css`
      fill: ${color ? theme.brand.colors[color].medium : theme.brand.colors.default};
    `}
`;
