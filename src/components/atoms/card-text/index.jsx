import styled, { css } from 'styled-components';

const CardText = ({ children }) => {
  return <CardTextContainer>{children}</CardTextContainer>;
};

const CardTextContainer = styled.p`
  letter-spacing: -0.3px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) =>
    css`
      color: ${theme.colors.grey.darkest};
      font-size: ${theme.fontSize.xxs};
      line-height: ${theme.fontSize.xxs};
    `}
`;

export default CardText;
