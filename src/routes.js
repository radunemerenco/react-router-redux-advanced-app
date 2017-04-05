import App from './App';

import config from 'config';

let allRoutes = [];
// Add main plugin routes
allRoutes = allRoutes.concat(require('./plugins/' + config.pluginName +'/routes').default);

// Add included plugins routes
config.includePlugins.map(route => {
  allRoutes = allRoutes.concat(require('./plugins/' + route +'/routes').default);
});

const routes = [
  { path: '/',
    component: App,
    childRoutes: allRoutes
  }
];

export default routes;
