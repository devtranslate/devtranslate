import { NotFoundProps } from './NotFound.types';
import { Grid } from '../../components/atoms/grid/Grid';
import { Footer } from '../../components/organisms/footer/Footer';
import { Header } from '../../components/organisms/header/Header';

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <Grid
      tag="main"
      paddingTop={{ xs: 'm', l: 'xl' }}
      paddingBottom={{ xs: 'm', l: 'xl' }}
      paddingLeft={{ xs: 's' }}
      paddingRight={{ xs: 's' }}
      container
    >
      <Header />
      <Footer />
    </Grid>
  );
};
