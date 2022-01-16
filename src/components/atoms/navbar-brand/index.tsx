import styled, { css } from 'styled-components';

type NavbarBrandProps = {
  href: string;
  title: string;
  src: string;
  alt: string;
};

const NavbarBrand: React.FC<NavbarBrandProps> = ({ children, href, title, src, alt }) => {
  return (
    <NavbarBrandContainer href={href} title={title}>
      {src ? <Logo src={src} alt={alt} /> : children}
    </NavbarBrandContainer>
  );
};

const NavbarBrandContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacing.sm};
  `}
`;

const Logo = styled.img`
  height: 28px;
`;

export default NavbarBrand;
