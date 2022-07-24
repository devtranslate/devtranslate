import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import queryString from 'query-string';
import { PaginationProps } from './Pagination.types';
import { Grid } from '../../../components/atoms/grid/Grid';
import { Icon } from '../../../components/atoms/icon/Icon';
import { Text } from '../../../components/atoms/text/Text';
import { Link } from '../../../components/atoms/link/Link';

export const Pagination: React.FC<PaginationProps> = ({ current, total }) => {
  const location = useLocation();

  const handlePageChange = (page: number | string) => {
    const parseQs = queryString.parse(location.search);
    const params = { page, query: parseQs.query };
    return `/catalogo?${queryString.stringify(params)}`;
  };

  const currentPage = current || 1;
  const limitPages = 5;

  const getPages = () => {
    let startPage: number;
    let endPage: number;

    if (total <= 5) {
      startPage = 1;
      endPage = total;
    } else if (currentPage <= limitPages - 2) {
      startPage = 1;
      endPage = limitPages;
    } else if (currentPage + 2 >= total) {
      startPage = total - (limitPages - 1);
      endPage = total;
    } else {
      startPage = currentPage - (limitPages - 4);
      endPage = currentPage + (limitPages - 4);
    }

    const pages: (string | number)[] = [...Array.from(Array(endPage + 1 - startPage).keys())].map((i) => startPage + i);
    const arrayStart = [1, '...'];
    const arrayEnd = ['...', total];

    if (total <= 5) {
      return pages;
    }

    if (currentPage <= limitPages - 2) {
      return pages.concat(arrayEnd);
    }

    if (currentPage + 2 >= total) {
      return arrayStart.concat(pages);
    }

    return arrayStart.concat(pages).concat(arrayEnd);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = total === currentPage;

  return (
    <Grid justifyContent={{ xs: 'center' }} paddingTop={{ xs: 'l' }} alignItems={{ xs: 'center' }}>
      {!isFirstPage && (
        <LinkUI href={handlePageChange(currentPage - 1)}>
          <Icon name="chevron" rotate={90} color="primary" width={32} height={32} />
        </LinkUI>
      )}
      {getPages().map((page, index) => {
        if (page === '...') {
          return (
            <Text tag="span" key={`page-${index - 1}`}>
              {page}
            </Text>
          );
        }
        return (
          <LinkUI active={page === currentPage} href={handlePageChange(page)} key={`page-${index - 1}`}>
            <Text tag="span">{page}</Text>
          </LinkUI>
        );
      })}
      {!isLastPage && (
        <LinkUI href={handlePageChange(currentPage + 1)}>
          <Icon name="chevron" rotate={270} color="primary" width={32} height={32} />
        </LinkUI>
      )}
    </Grid>
  );
};

const LinkUI = styled(Link)<{ active?: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.3s;

  ${({ theme }) => css`
    margin: 0 ${theme.spacing.xxs};
    border-radius: ${theme.borders.radius.xs};

    &:hover {
      span {
        color: ${theme.brand.colors.primary.medium};
        transition: all 0.3s;
        font-weight: bold;
      }
    }
  `}

  ${({ theme, active }) =>
    active &&
    css`
      font-weight: bold;
      border: 2px solid ${theme.brand.colors.primary.medium};
      border-radius: ${theme.borders.radius.xs};
      box-shadow: 0 2px 4px 0 rgba(248, 113, 113, 0.16), 0 0 1px 0 rgba(248, 113, 113, 0.04);
    `}
`;
