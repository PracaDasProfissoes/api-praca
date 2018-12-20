const personSchema = require('./person');
const locationSchema = require('./location');
const mongoose = require('mongoose');
const cnpjValidator = require('node-cnpj');
const emailValidator = require('email-validator');
const uniqueValidator = require('mongoose-unique-validator');

const schoolSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100
  },
  'type': {
    type: String,
    enum: ['public', 'private']
  },
  'initials': {
    type: String,
    trim: true,
    maxlength: 15
  },
  'cnpj': {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: v => v && cnpjValidator.validate(v),
      message: "invalid 'cnpj'"
    }
  },
  'email': {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: v => v && emailValidator.validate(v),
      message: "invalid 'email'"
    }
  },
  'password': {
    type: String,
    required: true
  },
  'telephone': {
    type: String,
    required: true,
    trim: true
  },
  'location': {
    type: locationSchema
  },
  'director': {
    type: personSchema.schema
  },
  'president': {
    type: personSchema.schema
  }
});

schoolSchema.plugin(uniqueValidator);

const School = mongoose.model('School', schoolSchema);

module.exports = School;
