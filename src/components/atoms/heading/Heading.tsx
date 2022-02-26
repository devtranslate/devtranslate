import styled from 'styled-components';
import { HeadingStyles } from './Heading.styles';
import { HeadingProps } from './Heading.types';

export const Heading: React.FC<HeadingProps> = ({ children, tag = 'h2', variant = 'default', ...props }) => {
  return (
    <HeadingUI as={tag} variant={variant} {...props}>
      {children}
    </HeadingUI>
  );
};

const HeadingUI = styled.h2`
  ${HeadingStyles};
`;
