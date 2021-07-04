import styled, { css } from 'styled-components';

const CardTitle = ({ children }) => {
  return <CardTitleContainer>{children}</CardTitleContainer>;
};

const CardTitleContainer = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: -0.5px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.tertiary.dark};
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.sm};
      line-height: ${theme.fontSize.sm};
      margin-bottom: ${theme.spacing.xs};
    `}
`;

export default CardTitle;
