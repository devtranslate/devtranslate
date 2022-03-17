import styled, { css } from 'styled-components';
import { Column } from '../../atoms/column/Column';
import { Grid } from '../../atoms/grid/Grid';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
import { View } from '../../atoms/view/View';
import { Link } from '../../atoms/link/Link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Grid tag="footer" paddingTop={{ xs: 'xxxl' }}>
      <Column
        xs={12}
        s={6}
        alignItems={{ xs: 'center', s: 'flex-start' }}
        justifyContent={{ xs: 'flex-end' }}
        paddingBottom={{ xs: 'xs', s: 'none' }}
      >
        <Text>{currentYear} © Devtranslate</Text>
      </Column>
      <Column xs={12} s={6} alignItems={{ xs: 'center', s: 'flex-end' }}>
        <Social>
          <SocialLink
            href="https://telegram.me/devtranslate"
            target="_blank"
            rel="external"
            title="Participe do nosso canal no Telegram (este link é aberto em uma nova janela)"
          >
            <Icon name="telegram" width={16} height={16} aria-hidden="true" />
            <SocialText paddingLeft={{ xs: 'xxs' }}>Telegram</SocialText>
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/company/11542261/admin/"
            target="_blank"
            rel="external"
            title="Acompanhe-nos no LinkedIn (este link é aberto em uma nova janela)"
          >
            <Icon name="linkedin" width={16} height={16} aria-hidden="true" />
            <SocialText paddingLeft={{ xs: 'xxs' }}>LinkedIn</SocialText>
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/devtranslate/"
            target="_blank"
            rel="external"
            title="Siga no Instagram (este link é aberto em uma nova janela)"
          >
            <Icon name="instagram" width={16} height={16} aria-hidden="true" />
            <SocialText paddingLeft={{ xs: 'xxs' }}>Instagram</SocialText>
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/devtranslate/"
            target="_blank"
            rel="external"
            title="Acompanhe-nos no Facebook (este link é aberto em uma nova janela)"
          >
            <Icon name="facebook" width={16} height={16} aria-hidden="true" />
            <SocialText paddingLeft={{ xs: 'xxs' }}>Facebook</SocialText>
          </SocialLink>
          <SocialLink
            href="https://github.com/devtranslate"
            target="_blank"
            rel="external"
            title="Acompanhe-nos no Github (este link é aberto em uma nova janela)"
          >
            <Icon name="github" width={16} height={16} aria-hidden="true" />
            <SocialText paddingLeft={{ xs: 'xxs' }}>Github</SocialText>
          </SocialLink>
          <SocialLink
            href="https://api.devtranslate.io/rss"
            target="_blank"
            rel="external"
            title="Siga nosso feed RSS (este link é aberto em uma nova janela)"
          >
            <Icon name="rss" width={16} height={16} aria-hidden="true" />
            <SocialText paddingLeft={{ xs: 'xxs' }}>RSS</SocialText>
          </SocialLink>
        </Social>
      </Column>
    </Grid>
  );
};

const Social = styled(View)`
  a:first-child {
    margin-left: 0;
  }
`;

const SocialLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacing.xxs};
    margin-left: ${theme.spacing.xs};
  `}
`;

const SocialText = styled(Text)`
  display: none;

  @media speech {
    display: flex;
  }
`;
