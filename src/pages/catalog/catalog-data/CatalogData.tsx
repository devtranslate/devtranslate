import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Pagination } from './Pagination';
import { CatalogDataProps } from './CatalogData.types';
import { Grid } from '../../../components/atoms/grid/Grid';
import { Link } from '../../../components/atoms/link/Link';
import { Image } from '../../../components/atoms/image/Image';
import { View } from '../../../components/atoms/view/View';
import { Heading } from '../../../components/atoms/heading/Heading';
import { Column } from '../../../components/atoms/column/Column';
import { Text } from '../../../components/atoms/text/Text';

export const CatalogData: React.FC<CatalogDataProps> = ({ translations, pagination }) => {
  const { page, pageSize, totalPages, totalRecords } = pagination;

  const rangeItem = page * pageSize - pageSize;
  const startRecords = rangeItem + 1;
  const endRecords = rangeItem + translations.length;

  const location = useLocation();
  const parseQs = queryString.parse(location.search);

  return (
    <>
      <Text size={{ xs: 'm' }} paddingBottom={{ xs: 's', m: 'l' }}>
        Encontrado{' '}
        <Text tag="b">
          {startRecords}-{endRecords}
        </Text>{' '}
        de <Text tag="b">{totalRecords}</Text> resultados
      </Text>
      <Grid justifyContent={{ xs: 'space-between' }}>
        {translations.map((translation) => (
          <Column xs={12} m={4} columnGap key={`columns-${translation.id}`} paddingBottom={{ xs: 'l' }}>
            <Card href={translation.url}>
              <CardImage src={translation.imageUrl} />
              <View
                paddingTop={{ xs: 'xxs' }}
                paddingBottom={{ xs: 'xs' }}
                paddingLeft={{ xs: 's' }}
                paddingRight={{ xs: 's' }}
              >
                <HeadingWrapper>
                  <HeadingCard lineClamp={2}>{translation.title}</HeadingCard>
                </HeadingWrapper>
                <Divisor />
                <Grid>
                  <ColumnWithDivisor xs={6} alignItems={{ xs: 'center' }} paddingRight={{ xs: 's' }}>
                    <CardSubtitle tag="b" textTransform="uppercase" size={{ xs: 'xs' }}>
                      Autor
                    </CardSubtitle>
                    <Text lineClamp={1} size={{ xs: 'xs' }}>
                      {translation.author}
                    </Text>
                  </ColumnWithDivisor>
                  <Column xs={6} alignItems={{ xs: 'center' }} paddingLeft={{ xs: 's' }}>
                    <CardSubtitle tag="b" textTransform="uppercase" size={{ xs: 'xs' }}>
                      Tradutor
                    </CardSubtitle>
                    <Text lineClamp={1} size={{ xs: 'xs' }}>
                      {translation.translator}
                    </Text>
                  </Column>
                </Grid>
              </View>
            </Card>
          </Column>
        ))}
      </Grid>
      <Pagination current={parseInt(typeof parseQs.page === 'string' ? parseQs.page : '', 10)} total={totalPages} />
    </>
  );
};

const Card = styled(Link)`
  text-decoration: none;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.borders.radius.xs};
    box-shadow: ${theme.elevations.xs};

    @media (min-width: ${theme.screens.m.min}) {
      &:hover {
        box-shadow: ${theme.elevations.s};
        transform: scale(1.05);
      }

      &:active {
        box-shadow: ${theme.elevations.xxs};
        transform: scale(1);
      }
    }
  `};
`;

const CardImage = styled(Image)`
  height: auto;

  ${({ theme }) => css`
    border-radius: ${theme.borders.radius.xs};
  `};
`;

const HeadingWrapper = styled(View)`
  display: flex;
  align-items: center;
  height: 40px;
`;

const HeadingCard = styled(Heading)`
  font-size: 16px;
  line-height: 20px;
`;

const Divisor = styled.hr`
  width: 100%;
  height: 1px;
  border: none;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[100]};
    margin-block-start: 10px;
    margin-block-end: 10px;
  `};
`;

const ColumnWithDivisor = styled(Column)`
  ${({ theme }) => css`
    border-right: 1px solid ${theme.colors.gray[100]};
  `};
`;

const CardSubtitle = styled(Text)`
  letter-spacing: 2px;
  line-height: 12px;

  ${({ theme }) => css`
    color: ${theme.colors.gray[500]};
  `};
`;
