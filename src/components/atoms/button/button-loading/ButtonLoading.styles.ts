import { css } from 'styled-components';
import { getButtonLoadingSize } from './ButtonLoading.helpers';
import { ButtonProps } from '../Button.types';
import { fadeIn, rotate } from '../../../../theme/animation/Animation';

export const ButtonLoadingUIStyles = css<{
  size?: ButtonProps['size'];
}>`
  position: absolute;
  animation: ${rotate} 600ms linear infinite, ${fadeIn} 240ms ease-in-out forwards;

  ${(props) => css`
    ${getButtonLoadingSize(props)}
  `}
`;
