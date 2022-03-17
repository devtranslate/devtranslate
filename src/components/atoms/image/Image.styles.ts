import { css } from 'styled-components';
import { ImageProps } from './Image.types';
import { getImageUnavailable } from './Image.helpers';
import { scale } from '../../../theme/animation/Animation';

export const IconUnavailableStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: ${({ theme }) => theme.colors.gray[400]};
`;

export const ImageStyles = css<{
  height?: ImageProps['height'];
  status?: 'failed' | 'loaded';
  width?: ImageProps['width'];
}>`
  position: relative;
  animation: ${scale} 240ms linear;
  opacity: 1;

  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};

  ${(props) => css`
    ${getImageUnavailable(props)};
  `}
`;
