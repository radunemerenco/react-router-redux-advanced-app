const redux = require('redux');
const reducers = require('../reducers/index');

module.exports = function(initialState) {
  const store = redux.createStore(reducers, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
