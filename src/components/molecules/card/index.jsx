import styled, { css } from 'styled-components';
import CardImage from '../../atoms/card-image';
import CardHeader from '../../atoms/card-header';
import CardBadge from '../../atoms/card-badge';
import CardBody from '../../atoms/card-body';
import CardTitle from '../../atoms/card-title';
import CardFooter from '../../atoms/card-footer';
import CardGroup from '../../atoms/card-group';
import CardSubtitle from '../../atoms/card-subtitle';
import CardText from '../../atoms/card-text';

const Card = () => {
  return (
    <CardContainer href="/">
      <CardImage src="https://image.ibb.co/b9GdKb/1.png" />
      <CardFloat>
        <CardHeader>
          <CardBadge variant="type">Artigo</CardBadge>
          <CardBadge variant="status">Concluído</CardBadge>
          <CardBadge variant="language">Português</CardBadge>
        </CardHeader>
        <CardBody>
          <CardTitle>Pare de usar CSS no JavaScript para desenvolvimento web</CardTitle>
          <CardFooter>
            <CardGroup>
              <CardSubtitle>Autor</CardSubtitle>
              <CardText>Gajus Kuizinas</CardText>
            </CardGroup>
            <CardGroup>
              <CardSubtitle>Tradutor</CardSubtitle>
              <CardText>Carlos Eduardo Olivieri</CardText>
            </CardGroup>
          </CardFooter>
        </CardBody>
      </CardFloat>
    </CardContainer>
  );
};

const CardContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  ${({ theme }) =>
    css`
      padding-bottom: ${theme.spacing.md};
    `}
`;

const CardFloat = styled.div`
  width: calc(100% - 24px);
  margin: auto;
  position: absolute;
  bottom: 0;
`;

export default Card;
