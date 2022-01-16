import styled, { css } from 'styled-components';
import Navbar from '../../molecules/navbar';

const Header: React.FC = () => {
  return (
    <HeaderContainer role="banner">
      <Navbar />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: auto;

  ${({ theme }) => css`
    background: ${theme.white};
  `}
`;

export default Header;
