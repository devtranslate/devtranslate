import styled, { css } from 'styled-components';

type FooterIconProps = {
  name: string;
  href: string;
  brand?: boolean;
  title: string;
};

const FooterIcon: React.FC<FooterIconProps> = ({ name, href, brand, title }) => {
  return (
    <FooterIconContainer href={href} target="_blank" rel="nofollow" title={title}>
      <Name>{name}</Name>
      <Icon className={`fa${brand ? 'b' : 's'} fa-${name.toLowerCase()} fa-2x`} />
    </FooterIconContainer>
  );
};

const FooterIconContainer = styled.a`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.xxs};
  `}

  &:hover {
    opacity: 0.7;
    transition: 1s;
  }
`;

const Icon = styled.span`
  &.fa-facebook {
    color: #3b5998;
  }

  &.fa-instagram {
    color: #d62976;
  }

  &.fa-github {
    color: #24292e;
  }

  &.fa-linkedin {
    color: #2867b2;
  }

  &.fa-telegram {
    color: #0088cc;
  }

  &.fa-rss {
    color: #ff6600;
  }
`;

const Name = styled.p`
  display: none;
  @media speech {
    code {
      display: block;
      speak: literal-punctuation;
    }
  }
`;
export default FooterIcon;
