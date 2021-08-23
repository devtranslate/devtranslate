import styled, { css } from 'styled-components';
import Header from '../../organisms/header';
import Main from '../../organisms/main';
import Loading from '../../organisms/loading';
import Error from '../../organisms/error';
import Footer from '../../organisms/footer';

const HomeResult = ({ data, loading, error, history }) => {
  const renderMain = () => {
    if (loading) {
      return <Loading history={history} />;
    }

    if (error || data.translations.length === 0) {
      return <Error history={history} />;
    }

    return <Main {...data} history={history} />;
  };

  return (
    <>
      <Header />
      <MainContainer>
        <Container>{renderMain()}</Container>
      </MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.grey.lightest};
    padding: ${theme.spacing.xxl} 0;

    @media (max-width: ${theme.breakpoints.touch}) {
      padding: ${theme.spacing.xl} 0;
    }
  `}
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export default HomeResult;
