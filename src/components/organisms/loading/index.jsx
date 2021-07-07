import styled, { css } from 'styled-components';
import Loader from '../../atoms/loader';

const Loading = () => {
  return (
    <LoadingContainer>
      <Container>
        <Loader width={50} />
      </Container>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.grey.lightest};
  `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: auto;
  height: 95vh;
`;

export default Loading;
