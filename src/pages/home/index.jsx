import { useState, useEffect } from 'react';
import queryString from 'query-string';
import HomeResult from '../../components/templates/home-result';
import apiService from '../../services/api';

const Home = ({ history, match }) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { page } = queryString.parse(history.location.search);
  const { query } = match.params;

  const currentPage = page ? `&page=${page}` : '';
  const currentQuery = query ? `&query=${query}` : '';

  useEffect(() => {
    setLoading(true);

    apiService
      .get(`/translations?pageSize=9${currentPage}${currentQuery}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [page, query]);

  return <HomeResult data={data} error={error} loading={loading} history={history} />;
};

export default Home;
