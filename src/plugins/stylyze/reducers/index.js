import { combineReducers } from 'redux';

const reducers = {
  user: require('./user.js')
};
module.exports = combineReducers(reducers);
