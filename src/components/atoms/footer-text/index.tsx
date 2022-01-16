import styled, { css } from 'styled-components';

const FooterText: React.FC = ({ children }) => {
  return <FooterTextContainer>{children}</FooterTextContainer>;
};

const FooterTextContainer = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grey.darkest};
    font-size: ${theme.fontSize.xxs};
  `}
`;

export default FooterText;
