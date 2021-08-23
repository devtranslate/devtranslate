import styled, { css } from 'styled-components';

const SearchInput = ({ value, placeholder, onChange }) => {
  return <SearchInputContainer type="text" value={value} placeholder={placeholder} onChange={onChange} />;
};

const SearchInputContainer = styled.input`
  width: 60%;
  border: 0;

  ${({ theme }) => css`
    color: ${theme.colors.grey.darkest};
    font-size: ${theme.fontSize.xs};
    line-height: ${theme.fontSize.xs};
    padding: ${theme.spacing.sm} ${theme.spacing.md};

    &::placeholder {
      color: ${theme.colors.grey.dark};
      opacity: 1;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      width: inherit;
    }
  `}
`;

export default SearchInput;
