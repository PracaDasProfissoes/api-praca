const express = require('express');
const debug = require('debug')('app:startup');

module.exports = (app) => {
  app.use(express.json());
  debug('Parser enabled...');
};
