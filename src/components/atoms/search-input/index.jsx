import styled, { css } from 'styled-components';

const SearchInput = ({ placeholder }) => {
  return <SearchInputContainer type="text" placeholder={placeholder} />;
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
