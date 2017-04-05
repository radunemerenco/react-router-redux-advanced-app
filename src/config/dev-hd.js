'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev-hd',  // feel free to remove the appEnv property here
  pluginName: 'homedepot',
  includePlugins: ['stylyze']
};

export default Object.freeze(Object.assign({}, baseConfig, config));
