import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeProvider from './components/atoms/theme-provider';
import GlobalStyle from './components/atoms/global-style';
import routes from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
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

export default App;
