import styled, { css } from 'styled-components';

const CardSubtitle: React.FC = ({ children }) => {
  return <CardSubtitleContainer>{children}</CardSubtitleContainer>;
};

const CardSubtitleContainer = styled.h3`
  text-transform: uppercase;

  ${({ theme }) =>
    css`
      color: ${theme.colors.secondary.medium};
      font-size: 10px;
      line-height: 10px;
    `}
`;

export default CardSubtitle;
