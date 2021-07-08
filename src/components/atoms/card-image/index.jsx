import styled, { css } from 'styled-components';

const CardImage = ({ src }) => {
  return <CardImageContainer src={src} aria-hidden="true" />;
};

const CardImageContainer = styled.img`
  width: 100%;
  min-height: 144px;

  ${({ theme }) =>
    css`
      border-radius: ${theme.borderRadius.sm};
      box-shadow: ${theme.elevation.skim};
    `}
`;

export default CardImage;
