import styled, { css } from 'styled-components';
import Card from '../../molecules/card';

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <Grid>
          {Array.from(Array(9)).map(() => (
            <Card />
          ))}
        </Grid>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.grey.lightest};
  `}
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  min-height: 95vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: repeat(auto-fill, minmax(373px, 1fr));
    }
  `}

  ${({ theme }) => css`
    padding: ${theme.spacing.sm};
    grid-row-gap: ${theme.spacing.md};
    grid-column-gap: ${theme.spacing.xxl};
  `}
`;

export default Main;
