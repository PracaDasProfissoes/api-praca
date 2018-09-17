const express = require('express');
require('express-async-errors');
const consign = require('consign');
const debug = require('debug')('app:startup');
const path = require('path');

const app = express();

require('./startup/mongo')();
require('./startup/logger')(app);
require('./startup/parser')(app);
app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/api-docs', express.static(path.join(__dirname, '/api-docs')));
require('./startup/swagger')(app);
require('./startup/cors')(app);

consign({ verbose: false })
  .include('controllers')
  .then('routes')
  .into(app);

require('./middlewares/errors')(app);

process.on('uncaughtException', err => {
  debug(err);
});

process.on('unhandledRejection', err => {
  throw err;
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Server listen on port ${port}...`);
});
