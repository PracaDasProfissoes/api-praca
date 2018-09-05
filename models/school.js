const personSchema = require('./person');
const addressSchema = require('./address');
const mongoose = require('mongoose');
const cnpjValidator = require('node-cnpj');

const School = mongoose.model('School', new mongoose.Schema({
  'name': {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    trim: true
  },
  'initials': {
    type: String,
    required: true,
    maxlength: 20,
    trim: true
  },
  'cnpj': {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: v => v && cnpjValidator.validate(v),
      message: "'cnpj' is not valid"
    }
  },
  'telephone': {
    type: String,
    required: true,
    trim: true
  },
  'email': {
    type: String,
    required: true,
    trim: true
  },
  'address': {
    type: addressSchema,
    required: true
  },
  'director': {
    type: personSchema.schema,
    required: true
  },
  'president': {
    type: personSchema.schema,
    required: true
  }
}));

module.exports = School;
