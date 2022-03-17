import axios from 'axios';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CatalogProps } from './Catalog.types';
import { Grid } from '../../components/atoms/grid/Grid';
import { Footer } from '../../components/organisms/footer/Footer';

export const Catalog: React.FC<CatalogProps> = () => {
  const [response, setResponse] = useState({ data: {}, loading: true, error: false });

  const { search } = useLocation();
  const parseQs = queryString.parse(search);
  const { page, query } = parseQs;

  useEffect(() => {
    const params = { page, query, pageSize: 9 };

    axios
      .get(`https://api.devtranslate.io/translations?${queryString.stringify(params)}`)
      .then(({ data }) => {
        setResponse({ data, loading: false, error: false });
      })
      .catch(() => {
        setResponse({ data: {}, loading: false, error: true });
      });
  }, [page, query]);

  return (
    <Grid tag="main" paddingLeft={{ xs: 's', xl: 'none' }} paddingRight={{ xs: 's', xl: 'none' }} container>
      <Footer />
    </Grid>
  );
};
