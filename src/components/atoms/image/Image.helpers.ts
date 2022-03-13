import { css } from 'styled-components';
import { ImageProps } from './Image.types';
import { Theme } from '../../../theme/Theme.types';

export const getImageUnavailable = (props: {
  height?: ImageProps['height'];
  status?: 'failed' | 'loaded';
  width?: ImageProps['width'];
  theme: Theme;
}) => {
  const { height, status, width, theme } = props;

  if (status === 'failed') {
    if (width && height) {
      return css`
        width: ${width}px;
        height: ${height}px;
        background: ${theme.colors.gray[100]};
      `;
    }

    return css`
      &:before {
        content: '';
        display: block;
        padding-top: 100%;
        background: ${theme.colors.gray[100]};
      }
    `;
  }

  return null;
};
