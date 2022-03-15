import { css } from 'styled-components';
import { ButtonProps } from '../Button.types';

export const getButtonIconSize = (props: { size?: ButtonProps['size'] }) => {
  const { size } = props;

  switch (size) {
    case 's':
      return css`
        width: 12px;
        height: 12px;
      `;
    case 'l':
      return css`
        width: 16px;
        height: 16px;
      `;
    case 'm':
    default:
      return css`
        width: 14px;
        height: 14px;
      `;
  }
};
