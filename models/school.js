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
    required: true,
    enum: ['public', 'private']
  },
  'initials': {
    type: String,
    required: true,
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
  'phone': {
    type: String,
    required: true,
    trim: true
  },
  'location': {
    type: String,
    required: true,
    maxlength: 300
  },
  'director': {
    type: personSchema.schema,
    required: true
  },
  'president': {
    type: personSchema.schema,
    required: function () {
      return this.type === 'public';
    }
  }
});

schoolSchema.plugin(uniqueValidator);

const School = mongoose.model('School', schoolSchema);

module.exports = School;
