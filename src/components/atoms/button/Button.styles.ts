import { css } from 'styled-components';
import { getButtonSize, getButtonVariant, getButtonHover, getButtonActive, getButtonDisabled } from './Button.helpers';
import { ButtonProps } from './Button.types';

export const ButtonStyles = css<{
  children: ButtonProps['children'];
  color?: ButtonProps['color'];
  disabled?: ButtonProps['disabled'];
  loading?: ButtonProps['loading'];
  reverse?: ButtonProps['reverse'];
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
  text-decoration: none;

  &:hover,
  &:active {
    transition: all 0.3s;
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
  }

  ${({ theme, color, loading }) => css`
    ${loading && `cursor: default;`}

    &:focus-visible {
      box-shadow: none;
      transition: none;
      outline-offset: 0;
      outline: 3px solid ${theme.brand.colors[color ?? 'primary'].outline};
    }
  `}

  ${(props) => css`
    ${getButtonSize(props)};
    ${getButtonVariant(props)};

    &:not(:disabled) {
      ${!props.loading &&
      css`
        &:hover {
          ${getButtonHover(props)};
        }

        &:active {
          ${getButtonActive(props)};
        }
      `}
    }

    &:disabled {
      ${getButtonDisabled(props)}
    }
  `}
`;
