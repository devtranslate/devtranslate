import styled, { css } from 'styled-components';

const NavbarItem = ({ children, href, title, disabled, accesskey }) => {
  return (
    <NavbarItemContainer role="none">
      <NavbarLink href={href} title={title} disabled={disabled} role="menuitem" accesskey={accesskey}>
        {children}
      </NavbarLink>
    </NavbarItemContainer>
  );
};

const NavbarItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.touch}) {
      width: 100%;
    }
  `}
`;

const NavbarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  cursor: pointer;

  ${({ theme, disabled }) => css`
    color: ${theme.colors.tertiary.dark};
    font-size: ${theme.fontSize.xxs};
    line-height: ${theme.fontSize.xxs};
    padding: ${theme.spacing.sm};
    width: 100%;

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: ${theme.spacing.md};
    }

    ${!disabled &&
    css`
      &:hover {
        color: ${theme.colors.primary.medium};
        border-bottom: 1px solid ${theme.colors.grey.dark};
      }
    `}

    ${disabled &&
    css`
      cursor: not-allowed;
      color: ${theme.colors.grey.dark};
      text-decoration-color: ${theme.colors.grey.medium};
    `}
  `}
`;

export default NavbarItem;
