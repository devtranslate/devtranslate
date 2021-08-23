import styled, { css } from 'styled-components';
import Search from '../../molecules/search';

const Error = ({ history }) => {
  return (
    <>
      <Search history={history} />
      <Container>
        <ErrorTitle>OOPS! :(</ErrorTitle>
        <ErrorSubtitle>Nenhum resultado encontrado</ErrorSubtitle>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: auto;
  height: 80vh;
`;

const ErrorTitle = styled.p`
  text-transform: uppercase;

  ${({ theme }) =>
    css`
      color: ${theme.colors.secondary.medium};
      font-size: ${theme.fontSize.xxl};
      font-weight: ${theme.fontWeight.bold};
      margin-bottom: ${theme.spacing.xxs};
    `}
`;

const ErrorSubtitle = styled.p`
  ${({ theme }) =>
    css`
      color: ${theme.colors.grey.dark};
      font-size: ${theme.fontSize.lg};
      font-weight: ${theme.fontWeight.light};
    `}
`;

export default Error;
