import { useState } from 'react';
import styled from 'styled-components';
import NavbarBrand from '../../atoms/navbar-brand';
import NavbarToggle from '../../atoms/navbar-toggle';
import NavbarMenu from '../../atoms/navbar-menu';
import NavbarItem from '../../atoms/navbar-item';
import NavbarButton from '../../atoms/navbar-button';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <NavbarContainer role="navigation">
      <NavbarBrand
        href="/"
        title="Ir para a página inicial do Devtranslate"
        src="https://devtranslate.io/assets/images/logo-horizontal.svg"
        alt="Duas caixas de texto, uma delas em rosa com um caracter oriental dentro e outra na cor amarela com um caracter ocidental dentro representando a tradução para ambos os idiomas. Ao lado dessas caixas de texto há o texto 'Devtranslate'."
      />
      <NavbarToggle active={active} onClick={() => setActive(!active)} />
      <NavbarMenu active={active}>
        <NavbarItem href="/" title="Ir para a página inicial do Devtranslate">
          Home
        </NavbarItem>
        <NavbarItem disabled>Sobre</NavbarItem>
        <NavbarItem disabled>Como contribuir</NavbarItem>
        <NavbarItem disabled>Blog</NavbarItem>
        <NavbarButton disabled>Em Breve!</NavbarButton>
      </NavbarMenu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  height: 60px;
  max-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Navbar;
