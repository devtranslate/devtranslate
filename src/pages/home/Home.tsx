import styled from 'styled-components';
import { HomeProps } from './Home.types';
import { Footer } from '../../components/organisms/footer/Footer';
import { Grid } from '../../components/atoms/grid/Grid';
import { Header } from '../../components/organisms/header/Header';
import { View } from '../../components/atoms/view/View';

export const Home: React.FC<HomeProps> = () => {
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
