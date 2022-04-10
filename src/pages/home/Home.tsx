import styled from 'styled-components';
import { Footer } from '../../components/organisms/footer/Footer';
import { Grid } from '../../components/atoms/grid/Grid';
import { Header } from '../../components/organisms/header/Header';
import { View } from '../../components/atoms/view/View';
import { Column } from '../../components/atoms/column/Column';
import { Image } from '../../components/atoms/image/Image';
import { Heading } from '../../components/atoms/heading/Heading';
import { Text } from '../../components/atoms/text/Text';
import { Button } from '../../components/atoms/button/Button';

export const Home: React.FC = () => {
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
            alignItems={{ xs: 'center' }}
            paddingBottom={{ xs: 'xl', m: 'none' }}
            paddingLeft={{ m: 'xl', l: 'none' }}
            paddingRight={{ xs: 's', s: 'l', m: 'xxl', l: 'none' }}
          >
            <Image src="/static/images/illustrations/home.svg" />
          </Column>
          <Column
            xs={12}
            s={7}
            m={6}
            justifyContent={{ xs: 'center' }}
            paddingLeft={{ l: 'xxxl' }}
            paddingRight={{ m: 'xxxl', l: 's' }}
          >
            <HeadingTypewriter
              variant="display"
              paddingBottom={{ xs: 'xs' }}
              textAlign={{ xs: 'center', m: 'left' }}
              size={{ xs: 'xs', s: 'm', m: 'l', l: 'xl' }}
            >
              Buscou tradução,
              <br />
              achou <b>Devtranslate</b>
            </HeadingTypewriter>
            <Text paddingBottom={{ xs: 'm' }} textAlign={{ xs: 'center', m: 'left' }} size={{ xs: 'm' }}>
              Este é um projeto de código aberto feito para a comunidade com o objetivo de facilitar o acesso ao
              conteúdo de tecnologia. Promovemos uma melhor localização por meio do nosso catálogo de traduções, além de
              possibilitar e facilitar o processo de tradução de conteúdo para outros idiomas.
            </Text>
            <View inline={{ xs: false, m: true }}>
              <Button color="secondary" href="/catalogo" icon={{ name: 'chevron', rotate: 270 }} size="l">
                Acesse o catálogo
              </Button>
            </View>
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

const HeadingTypewriter = styled(Heading)`
  &:after {
    content: '|';
    animation: blink 1.2s step-end infinite;
  }

  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: ${({ theme }) => theme.brand.colors.primary.medium};
    }
  }
`;
