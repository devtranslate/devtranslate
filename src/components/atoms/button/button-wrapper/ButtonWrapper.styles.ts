import { css } from 'styled-components';
import { getButtonIconSize } from './ButtonWrapper.helpers';
import { fadeIn } from '../../../../theme/animation/Animation';
import { ButtonProps } from '../Button.types';

export const ButtonWrapperUIStyles = css<{
  loading?: ButtonProps['loading'];
  reverse?: ButtonProps['reverse'];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 240ms ease-in-out forwards;

  ${({ loading }) =>
    loading &&
    css`
      opacity: 0;
      animation: ${fadeIn} 240ms ease-in-out reverse;
    `}

  ${({ reverse }) => reverse && `flex-direction: row-reverse;`}
`;

export const ButtonSpanUIStyles = css<{
  size?: ButtonProps['size'];
  reverse?: ButtonProps['reverse'];
  children?: ButtonProps['children'];
}>`
  ${({ theme, reverse }) =>
    reverse
      ? css`
          margin-inline-start: ${theme.spacing.xxs};
        `
      : css`
          margin-inline-end: ${theme.spacing.xxs};
        `}
`;

export const ButtonIconUIStyles = css<{
  size?: ButtonProps['size'];
}>`
  ${(props) => css`
    ${getButtonIconSize(props)}
  `}
`;
