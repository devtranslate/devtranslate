import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { NotFoundProps } from './NotFound.types';
import { Grid } from '../../components/atoms/grid/Grid';
import { Footer } from '../../components/organisms/footer/Footer';
import { Header } from '../../components/organisms/header/Header';
import { View } from '../../components/atoms/view/View';
import { Column } from '../../components/atoms/column/Column';
import { Image } from '../../components/atoms/image/Image';
import { Heading } from '../../components/atoms/heading/Heading';
import { Text } from '../../components/atoms/text/Text';
import { Button } from '../../components/atoms/button/Button';

export const NotFound: React.FC<NotFoundProps> = () => {
  const history = useHistory();

  return (
    <Background>
      <GridUI
        paddingTop={{ xs: 'm', l: 'xl' }}
        paddingBottom={{ xs: 'm', l: 'xl' }}
        paddingLeft={{ xs: 's' }}
        paddingRight={{ xs: 's' }}
        justifyContent={{ xs: 'space-between' }}
        container
      >
        <Header />
        <Grid tag="main" justifyContent={{ xs: 'center' }}>
          <Column
            xs={12}
            s={7}
            m={6}
            l={5}
            paddingBottom={{ xs: 'l', m: 'none' }}
            paddingLeft={{ m: 'xl', l: 'none' }}
            paddingRight={{ m: 'xxl', l: 'none' }}
          >
            <Image src="/static/images/illustrations/not-found.svg" />
          </Column>
          <Column xs={12} s={7} m={6} l={5} justifyContent={{ xs: 'center' }} paddingLeft={{ l: 'xxxl' }}>
            <Heading
              variant="display"
              color="primary"
              textAlign={{ xs: 'center', m: 'left' }}
              size={{ xs: 's', m: 'm' }}
            >
              404
            </Heading>
            <Heading
              tag="h3"
              paddingBottom={{ xs: 'xs' }}
              textAlign={{ xs: 'center', m: 'left' }}
              size={{ xs: 'xxs', m: 'xs' }}
            >
              Oops! Página não encontrada
            </Heading>
            <Text paddingBottom={{ xs: 'l' }} textAlign={{ xs: 'center', m: 'left' }}>
              A página que você tentou acessar está indisponível ou não existe.
            </Text>
            <ButtonWrapper inline={{ xs: false, m: true }}>
              <Button color="tertiary" onClick={() => history.goBack()} icon={{ name: 'chevron', rotate: 270 }}>
                Retornar à página anterior
              </Button>
              <Button variant="secondary" href="/">
                Ir para a página inicial
              </Button>
            </ButtonWrapper>
          </Column>
        </Grid>
        <Footer />
      </GridUI>
    </Background>
  );
};

const Background = styled(View)`
  background-image: url('/static/images/background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const GridUI = styled(Grid)`
  min-height: 100vh;
  flex-direction: column;
`;

const ButtonWrapper = styled(View)`
  ${({ theme }) => css`
    button {
      margin: 0 0 ${theme.spacing.s} 0;
    }

    @media (min-width: ${theme.screens.m.min}) {
      button {
        margin: 0 ${theme.spacing.s} 0 0;
      }
    }
  `}
`;
