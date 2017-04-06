import App from '../App';
import selfList from './list';
import stylyzeRoutes from 'stylyze/routes/list';

const allRoutes = selfList.concat(stylyzeRoutes);

const routes = [
  { path: '/',
    component: App,
    childRoutes: allRoutes
  }
];

export default routes;
