import styled from 'styled-components';
import { Image } from '../../../components/atoms/image/Image';
import { Heading } from '../../../components/atoms/heading/Heading';
import { Column } from '../../../components/atoms/column/Column';
import { Text } from '../../../components/atoms/text/Text';

export const CatalogError: React.FC = () => {
  return (
    <Column alignItems={{ xs: 'center' }} justifyContent={{ xs: 'center' }} paddingTop={{ xs: 'xxxl' }}>
      <ImageUI src="/static/images/illustrations/catalog-error.svg" />
      <Heading size={{ xs: 'xs' }} textAlign={{ xs: 'center' }} paddingTop={{ xs: 'xl' }} paddingBottom={{ xs: 'xs' }}>
        Oops! Nenhum resultado encontrado
      </Heading>
      <TextUI textAlign={{ xs: 'center' }} size={{ xs: 'l' }}>
        Parece que não temos uma tradução que corresponda à sua busca. Experimente ajustar sua pesquisa ou filtro para
        encontrar o que procura.
      </TextUI>
    </Column>
  );
};

const ImageUI = styled(Image)`
  max-width: 416px;
`;

const TextUI = styled(Text)`
  max-width: 535px;
`;
