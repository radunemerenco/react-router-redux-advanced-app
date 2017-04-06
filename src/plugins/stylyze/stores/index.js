const redux = require('redux');
import reducers from '../reducers';

module.exports = function(initialState) {
  const store = redux.createStore(reducers, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = reducers
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
