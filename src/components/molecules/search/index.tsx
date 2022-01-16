import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import queryString from 'query-string';
import { RouteComponentProps } from 'react-router-dom';
import SearchSelect from '../../atoms/search-select';
import SearchInput from '../../atoms/search-input';
import SearchButton from '../../atoms/search-button';

type SearchProps = {
  history: RouteComponentProps['history'];
};

const Search: React.FC<SearchProps> = ({ history }) => {
  const [query, setQuery]: [string, (query: string) => void] = useState<string>('');
  const [status, setStatus]: [string, (status: string) => void] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = { query, status, page: 1 };
    return history.replace(`?${queryString.stringify(params)}`);
  };

  const parseQs = queryString.parse(history.location.search);
  const { query: queryQs, status: statusQs } = parseQs;

  useEffect(() => {
    setQuery(typeof queryQs === 'string' ? queryQs : '');
    setStatus(typeof statusQs === 'string' ? statusQs : '');
  }, [queryQs, statusQs]);

  return (
    <SearchContainer onSubmit={(e) => handleSearch(e)}>
      <SearchSelect
        onChange={(e) => setStatus(e.target.value)}
        options={[
          { value: 'status', label: 'Status', disabled: true, selected: status === '' },
          { value: 'inProgress', label: 'Em progresso', selected: status === 'inProgress' },
          { value: 'completed', label: 'Concluído', selected: status === 'completed' },
        ]}
      />
      <SearchInput
        value={query}
        placeholder="Busque pelo título, autor ou tradutor"
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton type="submit" value="Buscar tradução" />
    </SearchContainer>
  );
};

const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;

  ${({ theme }) => css`
    box-shadow: ${theme.elevation.skim};
    margin: 0 ${theme.spacing.sm} ${theme.spacing.xxl} ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.xs};

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      margin: 0 ${theme.spacing.sm} ${theme.spacing.xl} ${theme.spacing.sm};
    }
  `}
`;

export default Search;
