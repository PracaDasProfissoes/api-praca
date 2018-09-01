const mongoose = require('mongoose');
const Joi = require('joi');
const cpfValidator = require('node-cpf');
const emailValidator = require('email-validator');

const Person = mongoose.model('Person', new mongoose.Schema({
  'name': {
    'type': String,
    'min': 3,
    'max': 100,
    'required': true
  },
  'address': {

  },
  'cpf': {
    'type': String,
    'min': 11,
    'max': 12,
    'required': true
  },
  'rg': {
    'type': String,
    'min': 0,
    'max': 20,
    'required': true
  },
  'email': {
    'type': String,
    'min': 0,
    'max': 50
  }

}));

const validatePerson = (person) => {
  const schema = {
    'name': Joi.string.min(3).max(100).required(),
    'cpf': Joi.string.min(11).max(12).required(),
    'rg': Joi.string.min(0).max(20).required(),
    'email': Joi.string.min(0).max(50)
  };

  const validationObj = Joi.validate(person, schema);

  if ((person.cpf && !cpfValidator.validate(person.cpf)) || (person.email && !emailValidator.validate(person.email))) {
    validationObj.error = { 'details': [ { 'message': 'Person validation failed: cpf is not valid or email is not valid' } ] };

    return validationObj;
  }
};

module.exports.Person = Person;
module.exports.validatePerson = validatePerson;
