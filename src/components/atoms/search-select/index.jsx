import styled, { css } from 'styled-components';

const SearchSelect = ({ options }) => {
  if (!options) {
    return null;
  }

  return (
    <SearchSelectContainer name="select">
      {options.map((option, index) => {
        return (
          <Option value={option.value} disabled={option.disabled} selected={option.selected} key={`option-${index}`}>
            {option.label}
          </Option>
        );
      })}
    </SearchSelectContainer>
  );
};

const SearchSelectContainer = styled.select`
  width: 20%;
  text-transform: uppercase;
  border: 0;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xs};
    line-height: ${theme.fontSize.xs};
    background: ${theme.colors.tertiary.dark};
    padding: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.xs} 0 0 ${theme.borderRadius.xs};
    border-right: ${theme.spacing.sm} solid transparent;

    @media (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
      border-radius: ${theme.borderRadius.xs} ${theme.borderRadius.xs} 0 0;
    }
  `}
`;

const Option = styled.option`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.fontSize.xs};
    line-height: ${theme.fontSize.xs};
    background: ${theme.colors.white};
    padding: ${theme.spacing.sm};

    &:disabled {
      color: ${theme.colors.grey.dark};
    }
  `}
`;

export default SearchSelect;
