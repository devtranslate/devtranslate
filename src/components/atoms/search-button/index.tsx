import styled, { css } from 'styled-components';

const SearchButton: React.FC<React.ComponentProps<'button'>> = ({ type, value }) => {
  return (
    <Button type={type}>
      <Icon className="fal fa-search" />
      {value}
    </Button>
  );
};

const Button = styled.button`
  width: 20%;
  text-transform: uppercase;
  border: 0;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xs};
    line-height: ${theme.fontSize.xs};
    background: ${theme.colors.primary.medium};
    padding: ${theme.spacing.sm};
    border-radius: 0 ${theme.borderRadius.xs} ${theme.borderRadius.xs} 0;

    @media (max-width: ${theme.breakpoints.touch}) {
      width: 100%;
      border-radius: 0 0 ${theme.borderRadius.xs} ${theme.borderRadius.xs};
    }
  `}
`;

const Icon = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxs};
    line-height: ${theme.fontSize.xxs};
    padding-right: ${theme.spacing.xs};
  `}
`;

export default SearchButton;
