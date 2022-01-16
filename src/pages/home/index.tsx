import { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import HomeResult from '../../components/templates/home-result';
import apiService from '../../services/api';
import { Translations } from '../../types/translations';

const Home: React.FC = () => {
  const location = useLocation();

  const [data, setData]: [Translations, (data: Translations) => void] = useState<Translations>({
    pagination: { page: 1, pageSize: 10, totalPages: 0 },
    translations: [],
  });
  const [error, setError]: [boolean, (error: boolean) => void] = useState<boolean>(false);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);

  const parseQs = queryString.parse(location.search);
  const { query, status, page } = parseQs;

  useEffect(() => {
    setLoading(true);

    const params = { page, query, status, pageSize: 9 };

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

  return <HomeResult data={data} error={error} loading={loading} />;
};

export default Home;
