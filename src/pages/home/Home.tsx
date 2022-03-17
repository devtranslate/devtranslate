import { HomeProps } from './Home.types';
import { Footer } from '../../components/organisms/footer/Footer';
import { Grid } from '../../components/atoms/grid/Grid';

export const Home: React.FC<HomeProps> = () => {
  return (
    <Grid
      tag="main"
      paddingTop={{ xs: 'm', l: 'xl' }}
      paddingBottom={{ xs: 'm', l: 'xl' }}
      paddingLeft={{ xs: 's' }}
      paddingRight={{ xs: 's' }}
      container
    >
      <Footer />
    </Grid>
  );
};
