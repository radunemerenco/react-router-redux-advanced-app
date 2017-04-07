'use strict';

let devConfig = require('./dev');
let config = Object.assign({}, devConfig);

config.resolve.alias = Object.assign({}, config.resolve.alias, {
  mainPlugin: `./plugins/homedepot`,
});

module.exports = config;
