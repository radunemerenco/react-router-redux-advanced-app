'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  // First element will be treated as main plugin
  compilePlugins: ['stylyze'],
  module: defaultSettings.getDefaultModules()
});

// Apply filter to match all files, except unneeded plugins (the needed plugins are defined in config.stylyzePlugins
var filesFilter = new RegExp('\/src\/(((plugins)\/(' + config.compilePlugins.join('|') + ')\/.*)|(?!plugins).*)\.(js|jsx)$');
config.module.loaders.push({
  test: filesFilter,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

config.resolve.alias = Object.assign({}, config.resolve.alias, {
  mainComponent: `./plugins/${config.compilePlugins[0]}/components/Main`,
})

module.exports = config;
