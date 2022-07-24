import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Column } from '../../atoms/column/Column';
import { Grid } from '../../atoms/grid/Grid';
import { View } from '../../atoms/view/View';
import { Link } from '../../atoms/link/Link';
import { Heading } from '../../atoms/heading/Heading';
import { Image } from '../../atoms/image/Image';
import { scale } from '../../../theme/animation/Animation';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

export const Header: React.FC = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (openSideMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openSideMenu]);

  return (
    <Grid tag="header" paddingBottom={{ xs: 'xxxl' }}>
      <Column xs={2} invisible={{ xs: false, s: true }}>
        <ButtonUI variant="secondary" icon={{ name: 'menu' }} size="l" onClick={() => setOpenSideMenu(true)} />
      </Column>
      <Column xs={8} s={6} alignItems={{ xs: 'center', s: 'flex-start' }}>
        <View>
          <Link href="/" title="Ir para a página inicial do Devtranslate">
            <Heading tag="h1">
              <Image
                src="/static/images/logo.svg"
                alt="Duas caixas de texto, uma delas em rosa com um caracter oriental dentro e outra na cor amarela com um caracter ocidental dentro representando a tradução para ambos os idiomas. Ao lado dessas caixas de texto há o texto 'Devtranslate'."
                width={150}
                height={24}
              />
            </Heading>
          </Link>
        </View>
      </Column>
      <Column xs={6} alignItems={{ xs: 'flex-end' }} invisible={{ xs: true, s: false }}>
        <Navigation tag="nav">
          <NavigationLink href="/" active={pathname === '/'}>
            Inicío
          </NavigationLink>
          <NavigationLink href="/catalogo" active={pathname === '/catalogo'}>
            Catálogo
          </NavigationLink>
        </Navigation>
      </Column>
      <SideMenu>
        <Overlay visible={openSideMenu} onClick={() => setOpenSideMenu(false)} />
        <SideMenuWrapper visible={openSideMenu}>
          <ButtonUI variant="secondary" icon={{ name: 'menu' }} size="l" onClick={() => setOpenSideMenu(false)} />
          <View inline={{ xs: false }} paddingTop={{ xs: 'm' }}>
            <SideMenuLink href="/" active={pathname === '/'}>
              <Icon name="home" color="primary" width={16} height={16} />
              <Text paddingLeft={{ xs: 'xs' }}>Inicío</Text>
            </SideMenuLink>
            <SideMenuLink href="/catalogo" active={pathname === '/catalogo'}>
              <Icon name="catalog" color="primary" width={16} height={16} />
              <Text paddingLeft={{ xs: 'xs' }}>Catálogo</Text>
            </SideMenuLink>
          </View>
        </SideMenuWrapper>
      </SideMenu>
    </Grid>
  );
};

const Navigation = styled(View)`
  a:first-child {
    margin-left: 0;
  }
`;

const NavigationLink = styled(Link)<{ active: boolean }>`
  position: relative;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }

  ${({ theme, active }) =>
    active &&
    css`
      font-weight: bold;

      :after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: calc(100% - 40px);
        margin: auto;
        border-radius: ${theme.borders.radius.xs};
        background: ${theme.brand.colors.primary.medium};
        animation: ${scale} 240ms linear;
      }
    `}

  ${({ theme }) => css`
    padding: ${theme.spacing.xxs} ${theme.spacing.s};
    margin-left: ${theme.spacing.xs};
  `}
`;

const ButtonUI = styled(Button)`
  padding: 0;
  height: 24px;
  border: 0;
  box-shadow: none;
  justify-content: flex-start;

  :not(:disabled):hover,
  :not(:disabled):active {
    border: 0;
    box-shadow: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SideMenu = styled(View)`
  width: 100%;

  ${({ theme }) => css`
    @media (min-width: ${theme.screens.s.min}) {
      display: none;
    }
  `}
`;

const SideMenuWrapper = styled(View)<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: -310px;
  width: 256px;
  height: 100%;
  z-index: 2;
  transition: left 0.3s ease;
  flex-direction: column;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacing.m} ${theme.spacing.s};
    border-radius: 0 ${theme.borders.radius.s} ${theme.borders.radius.s} 0;
    box-shadow: ${theme.elevations.m};
  `}

  ${({ visible }) =>
    visible &&
    css`
      left: 0px;
    `}
`;

const SideMenuLink = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;

  ${({ theme }) => css`
    padding: ${theme.spacing.s} 0;
  `}

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
    `}
`;

const Overlay = styled(Link)<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  transition: all 0.3;
  opacity: 0;
  z-index: -1;

  ${({ theme }) => css`
    background: ${theme.colors.gray[500]};
  `}

  ${({ visible }) =>
    visible &&
    css`
      opacity: 0.2;
      z-index: 1;
    `}
`;
