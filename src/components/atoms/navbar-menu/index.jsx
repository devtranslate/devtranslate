import styled, { css } from 'styled-components';

const NavbarMenu = ({ children, active }) => {
  return (
    <NavbarMenuContainer active={active} role="menu">
      {children}
    </NavbarMenuContainer>
  );
};

const NavbarMenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, active }) => css`
    padding: 0 ${theme.spacing.sm};

    @media (max-width: ${theme.breakpoints.touch}) {
      padding: 0;
      position: absolute;
      top: 50px;
      flex-direction: column;
      margin: auto;
      opacity: 0;
      transform: scale(0.8);
      transition: all 300ms ease-in-out;
      background: ${theme.colors.white};
      right: ${theme.spacing.sm};
      box-shadow: ${theme.elevation.floatin};
      border-radius: ${theme.borderRadius.xs};
      visibility: hidden;

      ${active &&
      css`
        visibility: visible;
        opacity: 1;
        transition: all 300ms ease-in-out;
        transform: scale(1);
      `}
    }
  `}
`;

export default NavbarMenu;
