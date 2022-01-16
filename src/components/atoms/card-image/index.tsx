import styled, { css } from 'styled-components';

type CardImageProps = {
  src: string;
};

const CardImage: React.FC<CardImageProps> = ({ src }) => {
  return <CardImageContainer src={src} aria-hidden="true" alt="" />;
};

const CardImageContainer = styled.img`
  width: 100%;
  min-height: 144px;

  ${({ theme }) =>
    css`
      border-radius: ${theme.borderRadius.sm};
      box-shadow: ${theme.elevation.skim};
      background-color: ${theme.colors.grey.light};
    `}
`;

export default CardImage;
