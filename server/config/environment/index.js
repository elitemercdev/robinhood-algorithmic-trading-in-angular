import * as path from 'path';
import * as _ from 'lodash';

import * as credentials from './credentials';

if(!credentials) {
    console.log('Credentials are missing. Continuing without credentials.');
}

// All configurations will extend these options
// ============================================

export default {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,
  yahoo: {
    key: _.get(credentials, 'default.yahoo.key', _.get(credentials, 'yahoo.key', null)),
    secret: _.get(credentials, 'default.yahoo.secret', _.get(credentials, 'yahoo.secret', null))
  },
  alpha: {
    key: _.get(credentials, 'default.alpha.key', _.get(credentials, 'alpha.key', null)),
  },
  tiingo: {
    key: _.get(credentials, 'default.tiingo.key', _.get(credentials, 'tiingo.key', null)),
  },
  apps: {
    goliath: 'http://localhost:8100/',
    tiingo: 'https://api.tiingo.com/'
  }
};
