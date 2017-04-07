'use strict';

let distConfig = require('./dist');
let config = Object.assign({}, distConfig);

config.resolve.alias = Object.assign({}, config.resolve.alias, {
  mainPlugin: `./plugins/homedepot`,
});

module.exports = config;
