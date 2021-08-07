import styled, { css } from 'styled-components';
import DeviceDetector from './device-detector';
import Card from '../../molecules/card';
import Search from '../../molecules/search';
import PaginationStyled from '../../molecules/pagination';

const Main = ({ history }) => {
  return (
    <MainContainer>
      <Container>
        <Search />
        <Grid>
          {Array.from(Array(9)).map(() => (
            <Card />
          ))}
        </Grid>
        <PaginationStyled
          history={history}
          limit={DeviceDetector() === 'mobile' ? 3 : 5}
          pageSize={6}
          totalPages={26}
        />
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.grey.lightest};
    padding: ${theme.spacing.xxl} 0;

    @media (max-width: ${theme.breakpoints.touch}) {
      padding: ${theme.spacing.xl} 0;
    }
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
    padding: 0 ${theme.spacing.sm};
    grid-row-gap: ${theme.spacing.md};
    grid-column-gap: ${theme.spacing.xxl};
  `}
`;

export default Main;
