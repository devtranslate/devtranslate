import { Catalog } from './pages/catalog/Catalog';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/not-found/NotFound';

export const routes = [
  {
    path: '/',
    type: 'home',
    exact: true,
    render: () => <Home />,
  },
  {
    path: '/catalogo',
    type: 'catalog',
    exact: true,
    render: () => <Catalog />,
  },
  {
    path: '/*',
    type: 'not-found',
    exact: true,
    render: () => <NotFound />,
  },
];
