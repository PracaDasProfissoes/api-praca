const mongoose = require('mongoose');
const dbDebugger = require('debug')('app:db');

module.exports = () => {
  mongoose.connect('mongodb://localhost/praca', { useNewUrlParser: true })
    .then(() => {
      dbDebugger('Connected on database praca...');
    })
    .catch((err) => {
      dbDebugger('Error connecting to the database' + err);
    });
};
