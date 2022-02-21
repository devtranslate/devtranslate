import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global.styles';
import { getTheme } from './theme/Theme';
import { routes } from './routes';

export const App = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <Router>
        <Switch>
          {routes.map((route) => {
            return <Route {...route} key={route.type} />;
          })}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
