import App from './App';

import stylyzeRoutes from './plugins/stylyze/routes'
import homedepotRoutes from './plugins/homedepot/routes'

const allRoutes = stylyzeRoutes.concat(homedepotRoutes);

const routes = [
  { path: '/',
    component: App,
    childRoutes: allRoutes
  }
];

export default routes;
