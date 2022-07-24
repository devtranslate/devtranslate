import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global.styles';
import { getTheme } from './theme/Theme';

import { Catalog } from './pages/catalog/Catalog';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/not-found/NotFound';

export const App = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogo" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
