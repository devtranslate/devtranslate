import { NotFoundProps } from './NotFound.types';
import { Grid } from '../../components/atoms/grid/Grid';
import { Footer } from '../../components/organisms/footer/Footer';

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <Grid tag="main" paddingLeft={{ xs: 's', xl: 'none' }} paddingRight={{ xs: 's', xl: 'none' }} container>
      <Footer />
    </Grid>
  );
};
