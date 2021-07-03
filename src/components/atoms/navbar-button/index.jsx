import styled, { css } from 'styled-components';

const NavbarButton = ({ children, disabled, onClick }) => {
  return (
    <NavbarButtonContainer disabled={disabled} onClick={onClick} type="button">
      {children}
    </NavbarButtonContainer>
  );
};

const NavbarButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  height: 100%;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  ${({ theme, disabled }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary.medium};
    font-size: ${theme.fontSize.xxs};
    line-height: ${theme.fontSize.xxs};
    padding: ${theme.spacing.sm};
    border-radius: 0 0 ${theme.borderRadius.xs} ${theme.borderRadius.xs};

    @media (max-width: ${theme.breakpoints.touch}) {
      width: 100%;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      margin-left: ${theme.spacing.sm};
      border-radius: ${theme.borderRadius.xl};
    }

    ${!disabled &&
    css`
      &:hover {
        background-color: ${theme.colors.secondary.dark};
      }
    `}

    ${disabled &&
    css`
      cursor: not-allowed;
      color: ${theme.colors.grey.darkest};
      background-color: ${theme.colors.grey.light};
    `}
  `}
`;

export default NavbarButton;
