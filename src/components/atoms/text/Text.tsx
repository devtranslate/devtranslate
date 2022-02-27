import styled from 'styled-components';
import { TextStyles } from './Text.styles';
import { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({ children, tag = 'p', ...props }) => {
  return (
    <TextUI as={tag} {...props}>
      {children}
    </TextUI>
  );
};

const TextUI = styled.p`
  ${TextStyles};
`;
