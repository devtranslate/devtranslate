import { Image } from '../../../components/atoms/image/Image';
import { Text } from '../../../components/atoms/text/Text';
import { Column } from '../../../components/atoms/column/Column';

export const CatalogLoading: React.FC = () => {
  return (
    <Column alignItems={{ xs: 'center' }} justifyContent={{ xs: 'center' }} paddingTop={{ xs: 'xxxl' }}>
      <Image src="/static/images/loading.svg" width={40} height={40} />
      <Text textAlign={{ xs: 'center' }}>Carregando</Text>
    </Column>
  );
};
