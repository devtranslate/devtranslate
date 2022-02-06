import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return <Route {...route} key={route.type} />;
        })}
      </Switch>
    </Router>
  );
};

export default App;
