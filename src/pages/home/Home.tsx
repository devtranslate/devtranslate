import { HomeProps } from './Home.types';
import { Footer } from '../../components/organisms/footer/Footer';
import { Grid } from '../../components/atoms/grid/Grid';

export const Home: React.FC<HomeProps> = () => {
  return (
    <Grid tag="main" paddingLeft={{ xs: 's', xl: 'none' }} paddingRight={{ xs: 's', xl: 'none' }} container>
      <Footer />
    </Grid>
  );
};
