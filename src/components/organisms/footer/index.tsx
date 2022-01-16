import styled, { css } from 'styled-components';
import FooterIcon from '../../atoms/footer-icon';
import FooterText from '../../atoms/footer-text';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterIconWrapper>
          <FooterIcon
            name="Telegram"
            href="https://telegram.me/devtranslate"
            brand
            title="Acompanhe-nos no Telegram! Observação: Este link é aberto em uma nova janela."
          />
          <FooterIcon
            name="Linkedin"
            href="https://www.linkedin.com/company/devtranslate/"
            brand
            title="Acompanhe-nos no Linkedin! Observação: Este link é aberto em uma nova janela."
          />
          <FooterIcon
            name="Instagram"
            href="https://instagram.com/devtranslate"
            brand
            title="Acompanhe-nos no Instagram! Observação: Este link é aberto em uma nova janela."
          />
          <FooterIcon
            name="Facebook"
            href="https://facebook.com/devtranslate/"
            brand
            title="Acompanhe-nos no Facebook! Observação: Este link é aberto em uma nova janela."
          />
          <FooterIcon
            name="Github"
            href="https://github.com/devtranslate"
            brand
            title="Acompanhe-nos no Github! Observação: Este link é aberto em uma nova janela."
          />
          <FooterIcon
            name="RSS"
            href="https://github.com/devtranslate"
            title="Siga nosso feed RSS! Observação: Este link é aberto em uma nova janela."
          />
        </FooterIconWrapper>
        <FooterText>Devtranslate © {currentYear} - Todos os Direitos Reservados</FooterText>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grey.light};
  `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1280px;
  margin: auto;

  ${({ theme }) => css`
    padding: ${theme.spacing.xl} 0;
  `}
`;

const FooterIconWrapper = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing.xs};
  `}
`;

export default Footer;
