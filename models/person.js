const addressSchema = require('./address');
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
  'address': {
    type: addressSchema,
    required: true
  },
  'cpf': {
    type: String,
    maxlength: 11,
    required: true,
    validate: {
      validator: v => v && cpfValidator.validate(v),
      message: 'cpf is not valid'
    }
  },
  'rg': {
    type: String,
    minlength: 0,
    maxlength: 20,
    required: true
  },
  'email': {
    type: String,
    minlength: 0,
    maxlength: 50,
    validate: {
      validator: v => v && emailValidator.validate(v),
      message: 'email is not valid'
    }
  }

}));

module.exports = personSchema;
