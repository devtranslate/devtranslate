import { useState, useEffect } from 'react';
import HomeLoading from '../../components/templates/home-loading';
import HomeResult from '../../components/templates/home-result';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      return setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <HomeLoading />;
  }

  return <HomeResult />;
};

export default Home;
