/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


/* Populated by react-webpack-redux:reducer */
var reducers = {
  routing: routerReducer
};

import config from 'config';

// Add main plugin reducers
Object.assign(reducers, require('./plugins/' + config.pluginName +'/reducers/index').default);

// Add included plugins reducers
config.includePlugins.map(reducer => {
  Object.assign(reducers, require('./plugins/' + reducer +'/reducers/index').default);
});

module.exports = combineReducers(reducers);
