import { useState, useEffect } from 'react';
import queryString from 'query-string';
import HomeResult from '../../components/templates/home-result';
import apiService from '../../services/api';

const Home = (props) => {
  const { location } = props;
  const parseQs = queryString.parse(location.search);

  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { query, status, page } = parseQs;
  const params = { page, query, status, pageSize: 9 };

  useEffect(() => {
    setLoading(true);

    apiService
      .get(`/translations?${queryString.stringify(params)}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [page, query, status]);

  return <HomeResult data={data} error={error} loading={loading} {...props} />;
};

export default Home;
