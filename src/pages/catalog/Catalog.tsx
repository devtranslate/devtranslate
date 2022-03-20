import axios from 'axios';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CatalogLoading } from './catalog-loading/CatalogLoading';
import { CatalogError } from './catalog-error/CatalogError';
import { CatalogData } from './catalog-data/CatalogData';
import { CatalogProps } from './Catalog.types';
import { Grid } from '../../components/atoms/grid/Grid';
import { Footer } from '../../components/organisms/footer/Footer';
import { Header } from '../../components/organisms/header/Header';
import { View } from '../../components/atoms/view/View';
import { Heading } from '../../components/atoms/heading/Heading';
import { Column } from '../../components/atoms/column/Column';
import { Button } from '../../components/atoms/button/Button';

export const Catalog: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const parseQs = queryString.parse(location.search);
  const { page, query } = parseQs;

  const [response, setResponse]: [CatalogProps, (response: CatalogProps) => void] = useState<CatalogProps>({
    data: { translations: [], pagination: { page: 1, pageSize: 10, totalPages: 0, totalRecords: 0 } },
    loading: true,
    error: false,
  });

  const [search, setSearch]: [string, (status: string) => void] = useState<string>(
    typeof query === 'string' ? query : ''
  );

  useEffect(() => {
    const translationsData = {
      translations: [],
      pagination: { page: 1, pageSize: 10, totalPages: 0, totalRecords: 0 },
    };

    setResponse({ data: translationsData, loading: true, error: false });

    const params = { page, query, pageSize: 9 };

    axios
      .get(`https://api.devtranslate.io/translations?${queryString.stringify(params)}`)
      .then(({ data }) => {
        setTimeout(() => {
          setResponse({ data, loading: false, error: false });
        }, 1000);
      })
      .catch(() => {
        setResponse({
          data: translationsData,
          loading: false,
          error: true,
        });
      });
  }, [page, query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = { query: search, page: 1 };
    return history.push(`?${queryString.stringify(params)}`);
  };

  const renderCatalogData = () => {
    const { data, loading, error } = response;

    if (loading) {
      return <CatalogLoading />;
    }

    if (error || data?.translations.length === 0) {
      return <CatalogError />;
    }

    return <CatalogData {...data} />;
  };

  return (
    <Background>
      <GridUI
        paddingTop={{ xs: 'm', l: 'xl' }}
        paddingBottom={{ xs: 'm', l: 'xl' }}
        paddingLeft={{ xs: 's' }}
        paddingRight={{ xs: 's' }}
        container
      >
        <Header />
        <Grid paddingTop={{ xs: 'm', l: 'xxxl' }} paddingBottom={{ xs: 's', m: 'm' }}>
          <Heading size={{ xs: 'xs', m: 's' }}>Catálogo de traduções</Heading>
          <Triangle aria-hidden="true" />
        </Grid>
        <View tag="main">
          <Form onSubmit={(e) => handleSearch(e)}>
            <Card justifyContent={{ xs: 'space-between' }} paddingRight={{ m: 'xs' }}>
              <Column
                xs={12}
                m={9}
                l={10}
                paddingTop={{ m: 'xs' }}
                paddingBottom={{ xs: 'xs' }}
                paddingLeft={{ m: 's' }}
                paddingRight={{ m: 's' }}
              >
                <Input
                  value={search ?? ''}
                  placeholder="Busque pelo título, autor ou tradutor"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Column>
              <Column xs={12} m={3} l={2} justifyContent={{ xs: 'center' }}>
                <Button type="submit" color="tertiary" size="l" icon={{ name: 'search' }} reverse>
                  Buscar tradução
                </Button>
              </Column>
            </Card>
          </Form>
          <GridUI justifyContent={{ xs: 'center' }} paddingTop={{ xs: 'xxxl' }} paddingBottom={{ xs: 'xxxl' }}>
            {renderCatalogData()}
          </GridUI>
        </View>
        <Footer />
      </GridUI>
    </Background>
  );
};

const Background = styled(View)`
  background-image: url('/static/images/background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const GridUI = styled(Grid)`
  min-height: 65vh;
  flex-direction: column;
`;

const Card = styled(Grid)`
  ${({ theme }) => css`
    @media (min-width: ${theme.screens.m.min}) {
      background: ${theme.colors.white};
      border-radius: ${theme.borders.radius.xs};
      box-shadow: ${theme.elevations.xxs};
    }
  `};
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  border: 0;
  font-family: inherit;
  height: 40px;
  max-height: 40px;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${({ theme }) => css`
    background: ${theme.colors.white};
    font-size: ${theme.typography.fontSizes.body.l};
    border-radius: ${theme.borders.radius.xs};

    @media (max-width: ${theme.screens.s.max}) {
      border-radius: ${theme.borders.radius.xs};
      box-shadow: ${theme.elevations.xs};
      padding: ${theme.spacing.s} ${theme.spacing.s};
      font-size: ${theme.typography.fontSizes.body.l};
    }
  `};
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  transform: rotate(10deg);
  border-left: 8px solid transparent;
  border-right: 13px solid transparent;
  margin: 6px 16px;

  ${({ theme }) => css`
    border-bottom: 17px solid ${theme.brand.colors.primary.medium};

    @media (max-width: ${theme.screens.s.max}) {
      margin: 0 16px;
    }
  `};
`;
