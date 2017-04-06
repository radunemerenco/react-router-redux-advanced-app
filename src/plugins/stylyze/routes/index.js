import App from '../App';
import selfList from './list';

// const allRoutes = selfList.concat([other plugin routes]);
const allRoutes = selfList;

const routes = [
  { path: '/',
    component: App,
    childRoutes: allRoutes
  }
];

export default routes;
