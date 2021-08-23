import Home from './pages/home';

const routes = [
  {
    path: '/:query?',
    type: 'home',
    render: function Component(props) {
      return <Home {...props} />;
    },
  },
];

export default routes;
