import styled from 'styled-components';

const CardFooter = ({ children }) => {
  return <CardFooterContainer>{children}</CardFooterContainer>;
};

const CardFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default CardFooter;
