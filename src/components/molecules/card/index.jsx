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

const getType = (type) => {
  switch (type) {
    case 'articles':
      return 'Artigo';
    case 'documentation':
      return 'Documentação';
    case 'books':
      return 'Livro';
    case 'others':
      return 'Outro';
    default:
      return '';
  }
};

const getStatus = (status) => {
  switch (status) {
    case 'completed':
      return 'Concluído';
    case 'inProgress':
      return 'Em progresso';
    default:
      return '';
  }
};

const getLanguage = (language) => {
  switch (language) {
    case 'portuguese':
      return 'Português';
    case 'english':
      return 'Inglês';
    default:
      return '';
  }
};

const Card = ({ translation }) => {
  const { url, imageUrl, type, status, language, title, author, translator } = translation;

  return (
    <CardContainer href={url}>
      <CardImage src={imageUrl} />
      <CardFloat>
        <CardHeader>
          <CardBadge variant="type">{getType(type)}</CardBadge>
          <CardBadge variant="status">{getStatus(status)}</CardBadge>
          <CardBadge variant="language">{getLanguage(language)}</CardBadge>
        </CardHeader>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardFooter>
            <CardGroup>
              <CardSubtitle>Autor</CardSubtitle>
              <CardText>{author}</CardText>
            </CardGroup>
            <CardGroup>
              <CardSubtitle>Tradutor</CardSubtitle>
              <CardText>{translator}</CardText>
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
