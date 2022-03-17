import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Column } from '../../atoms/column/Column';
import { Grid } from '../../atoms/grid/Grid';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
import { View } from '../../atoms/view/View';
import { Link } from '../../atoms/link/Link';
import { Heading } from '../../atoms/heading/Heading';
import { Image } from '../../atoms/image/Image';
import { scale } from '../../../theme/animation/Animation';

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Grid tag="header" paddingBottom={{ xs: 'xxxl' }}>
      <Column xs={12} s={6} alignItems={{ xs: 'center', s: 'flex-start' }}>
        <View>
          <Link href="/">
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
      <Column xs={6} alignItems={{ xs: 'flex-end' }} hidden={{ xs: true, s: false }}>
        <Navigation tag="nav">
          <NavigationLink href="/" active={pathname === '/'}>
            Inicío
          </NavigationLink>
          <NavigationLink href="/catalogo" active={pathname === '/catalogo'}>
            Catálogo
          </NavigationLink>
        </Navigation>
      </Column>
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
