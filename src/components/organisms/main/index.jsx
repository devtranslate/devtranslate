import styled, { css } from 'styled-components';
import DeviceDetector from './device-detector';
import Card from '../../molecules/card';
import Search from '../../molecules/search';
import PaginationStyled from '../../molecules/pagination';

const Main = ({ translations, pagination, history }) => {
  return (
    <>
      <Search history={history} />
      <Grid>
        {translations.map((translation) => (
          <Card key={`card-${translation.id}`} translation={translation} />
        ))}
      </Grid>
      <PaginationStyled
        history={history}
        limit={DeviceDetector() === 'mobile' ? 3 : 5}
        activePage={pagination.page}
        pageSize={pagination.pageSize}
        totalPages={pagination.totalPages}
      />
    </>
  );
};

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
