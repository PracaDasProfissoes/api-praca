const mongoose = require('mongoose');
const config = require('config');
const dbDebugger = require('debug')('app:db');

module.exports = () => {
  const db = config.get('db');
  mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
      dbDebugger(`Connected on ${db}`);
    })
    .catch((err) => {
      dbDebugger('Error connecting to the database' + err);
    });
};
