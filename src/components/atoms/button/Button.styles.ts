import { css } from 'styled-components';
import { getButtonSize, getButtonVariant, getButtonHover, getButtonActive, getButtonDisabled } from './Button.helpers';
import { ButtonProps } from './Button.types';

export const ButtonStyles = css<{
  color: ButtonProps['color'];
  disabled?: ButtonProps['disabled'];
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
  &:active,
  &:focus-visible {
    transition: all 0.3s;
  }

  ${({ theme, color }) => css`
    &:focus-visible {
      box-shadow: none;
      outline: 3px solid ${theme.brand.colors[color].outline};
    }
  `}

  ${(props) => css`
    ${getButtonSize(props)};
    ${getButtonVariant(props)};

    &:not(:disabled) {
      &:hover {
        ${getButtonHover(props)};
      }

      &:active {
        ${getButtonActive(props)};
      }
    }

    &:disabled {
      ${getButtonDisabled(props)}
    }
  `}
`;
