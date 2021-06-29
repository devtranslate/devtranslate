import Home from './pages/home';

const routes = [
  {
    path: '/',
    type: 'home',
    render: function Component(props) {
      return <Home {...props} />;
    },
  },
];

export default routes;
