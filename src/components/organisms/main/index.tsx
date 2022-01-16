import styled, { css } from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import DeviceDetector from './device-detector';
import Card from '../../molecules/card';
import Search from '../../molecules/search';
import PaginationStyled from '../../molecules/pagination';
import { Pagination } from '../../../types/pagination';
import { Translation } from '../../../types/translation';

type MainProps = {
  translations: Translation[];
  pagination: Pagination;
  history: RouteComponentProps['history'];
};

const Main: React.FC<MainProps> = ({ translations, pagination, history }) => {
  const { page, pageSize, totalPages } = pagination;

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
        activePage={page}
        pageSize={pageSize}
        totalPages={totalPages}
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
