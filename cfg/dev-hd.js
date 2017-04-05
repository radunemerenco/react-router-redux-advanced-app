'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  // First element will be treated as main plugin
  compilePlugins: ['homedepot', 'stylyze'],
  module: defaultSettings.getDefaultModules()
});

// Apply filter to match all files, except unneeded plugins (the needed plugins are defined in config.stylyzePlugins
var filesFilter = new RegExp('\/src\/(((plugins)\/(' + config.compilePlugins.join('|') + ')\/.*)|(?!plugins).*)\.(js|jsx)$');
// Add needed loaders to the defaults here
config.module.loaders.push({
  test: filesFilter,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

config.resolve.alias = Object.assign({}, config.resolve.alias, {
  mainComponent: `./plugins/${config.compilePlugins[0]}/components/Main`,
})

module.exports = config;
