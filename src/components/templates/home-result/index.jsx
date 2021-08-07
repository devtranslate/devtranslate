import Header from '../../organisms/header';
import Main from '../../organisms/main';
import Footer from '../../organisms/footer';

const HomeResult = ({ history }) => {
  return (
    <>
      <Header />
      <Main history={history} />
      <Footer />
    </>
  );
};

export default HomeResult;
