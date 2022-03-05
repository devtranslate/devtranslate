import styled from 'styled-components';
import { ButtonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ children, href, color = 'primary', type = 'button', ...props }) => {
  if (href) {
    return (
      <ButtonUI as="a" role="button" href={href} color={color} {...props}>
        {children}
      </ButtonUI>
    );
  }

  return (
    <ButtonUI type={type} color={color} {...props}>
      {children}
    </ButtonUI>
  );
};

const ButtonUI = styled.button`
  ${ButtonStyles};
`;
