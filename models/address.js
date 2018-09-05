const mongoose = require('mongoose');

const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO'
];

const addressSchema = mongoose.Schema({
  'state': {
    type: String,
    required: true,
    enum: states
  },
  'city': {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  'district': {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  'endereco': {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200
  },
  'number': {
    type: String,
    required: true,
    match: /\d+|s\/n/i
  },
  'cep': {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 8
  }
});

module.exports = addressSchema;
