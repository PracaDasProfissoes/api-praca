const logger = require('morgan');
const debug = require('debug')('app:startup');

module.exports = (app) => {
  app.use(logger('dev'));
  debug('Morgan enabled...');
};
