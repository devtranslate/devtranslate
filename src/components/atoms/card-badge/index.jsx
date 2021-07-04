import styled, { css } from 'styled-components';

const CardBadge = ({ children, variant }) => {
  return <CardBadgeContainer variant={variant}>{children}</CardBadgeContainer>;
};

const CardBadgeContainer = styled.span`
  text-transform: uppercase;

  ${({ theme, variant }) =>
    css`
      color: ${theme.colors.white};
      font-size: 9px;
      line-height: 9px;
      background: ${theme.colors.grey.darkest};
      padding: ${theme.spacing.xxs} ${theme.spacing.xs};
      border-radius: ${theme.borderRadius.sm};
      margin-right: ${theme.spacing.xxs};

      ${variant === 'type' &&
      css`
        background: ${theme.colors.primary.medium};
      `}

      ${variant === 'status' &&
      css`
        background: ${theme.colors.secondary.medium};
      `}

      ${variant === 'language' &&
      css`
        background: ${theme.colors.tertiary.dark};
      `}
    `}
`;

export default CardBadge;
