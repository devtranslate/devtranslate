import styled from 'styled-components';
import { LinkStyles } from './Link.styles';
import { LinkProps } from './Link.types';

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return <LinkUI {...props}>{children}</LinkUI>;
};

const LinkUI = styled.a`
  ${LinkStyles};
`;
