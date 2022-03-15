import { css } from 'styled-components';
import { ButtonProps } from '../Button.types';

export const getButtonLoadingSize = (props: { size?: ButtonProps['size'] }) => {
  const { size } = props;

  switch (size) {
    case 's':
      return css`
        width: 17px;
        height: 17px;
      `;
    case 'l':
      return css`
        width: 21px;
        height: 21px;
      `;
    case 'm':
    default:
      return css`
        width: 19px;
        height: 19px;
      `;
  }
};
