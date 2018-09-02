const mongoose = require('mongoose');
const Joi = require('joi');
const cnpjValidator = require('node-cnpj');

const School = mongoose.model('School', new mongoose.Schema({
  'name': {
    'type': String,
    'required': true
  },
  'initials': {
    'type': String,
    'required': true
  },
  'cnpj': {
    'type': String,
    'required': true
  }
}));

const validateSchool = (school) => {
  const schema = {
    'name': Joi.string().min(5).max(100).required(),
    'initials': Joi.string().max(20).required(),
    'cnpj': Joi.string().required()
  };

  const validationObj = Joi.validate(school, schema);

  if (school.cnpj && !cnpjValidator.validate(school.cnpj)) {
    validationObj.error = { 'details': [ { 'message': "School validation failed: cnpj: 'cnpj' is not valid" } ] };
  }

  return validationObj;
};

module.exports.School = School;
module.exports.validateSchool = validateSchool;
