import styled from 'styled-components';
import Loader from '../../atoms/loader';
import Search from '../../molecules/search';

const Loading = ({ history }) => {
  return (
    <>
      <Search history={history} />
      <Container>
        <Loader width={50} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: auto;
  height: 80vh;
`;

export default Loading;
