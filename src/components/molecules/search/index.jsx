import styled, { css } from 'styled-components';
import SearchSelect from '../../atoms/search-select';
import SearchInput from '../../atoms/search-input';
import SearchButton from '../../atoms/search-button';

const Search = () => {
  return (
    <SearchContainer>
      <SearchSelect
        options={[
          { value: 'status', label: 'Status', disabled: true, selected: true },
          { value: 'inprogress', label: 'Em progresso' },
          { value: 'concluded', label: 'Concluído' },
        ]}
      />
      <SearchInput placeholder="Busque pelo título, autor ou tradutor" />
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
