import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
