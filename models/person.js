const locationSchema = require('./location');
const mongoose = require('mongoose');
const cpfValidator = require('node-cpf');
const emailValidator = require('email-validator');

const personSchema = mongoose.model('Person', new mongoose.Schema({
  'name': {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100
  },
  'location': {
    type: locationSchema,
    required: true
  },
  'cpf': {
    type: String,
    required: true,
    validate: {
      validator: v => v && cpfValidator.validate(v),
      message: "invalid 'cpf'"
    }
  },
  'rg': {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 9
  },
  'email': {
    type: String,
    required: true,
    validate: {
      validator: v => v && emailValidator.validate(v),
      message: "invalid 'email'"
    }
  }
}));

module.exports = personSchema;
