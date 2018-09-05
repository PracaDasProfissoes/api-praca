const express = require('express');
const consign = require('consign');
const debug = require('debug')('app:startup');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();

require('./startup/mongo')();
require('./startup/logger')(app);
require('./startup/parser')(app);


consign({ verbose: false })
  .include('controllers')
  .then('routes')
  .into(app);

require('./startup/error')(app);
require('./startup/swagger')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Server listen on port ${port}...`);
});
