const express = require('express');
const consign = require('consign');
const debug = require('debug')('app:startup');

const app = express();

require('./startup/mongo')();
require('./startup/logger')(app);
require('./startup/parser')(app);
app.use('/', express.static(__dirname + '/../public'));
app.use('/api-docs', express.static(__dirname + '/api-docs'));
require('./startup/swagger')(app);


consign({ verbose: false })
  .include('controllers')
  .then('routes')
  .into(app);

require('./startup/error')(app);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Server listen on port ${port}...`);
});

