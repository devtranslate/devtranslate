import styled, { css } from 'styled-components';
import Pagination from 'react-js-pagination';
import queryString from 'query-string';

const PaginationStyled = ({ history, limit, activePage, pageSize, totalPages }) => {
  const handlePageChange = (page) => {
    const parseQs = queryString.parse(history.location.search);
    const { query, status } = parseQs;

    const params = { query, status, page };
    return history.replace(`?${queryString.stringify(params)}`);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <PaginationContainer>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={pageSize}
        totalItemsCount={totalPages * pageSize}
        pageRangeDisplayed={limit}
        onChange={handlePageChange}
        prevPageText="‹"
        nextPageText="›"
      />
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxl};
  `}

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      ${({ theme }) => css`
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;

          color: ${theme.colors.grey.dark};
          background: ${theme.colors.white};
          font-size: ${theme.fontSize.sm};
          border-radius: ${theme.borderRadius.rounded};
          box-shadow: ${theme.elevation.skim};
          margin: 0 ${theme.spacing.xxs};

          &:hover {
            color: ${theme.colors.primary.medium};
          }
        }

        &.active > a {
          color: ${theme.colors.white};
          background: ${theme.colors.primary.medium};
        }
      `}
    }
  }
`;

export default PaginationStyled;
