const mongoose = require('mongoose')
const Joi = require('joi')
const cpfValidator = require('node-cpf')

schemaPerson = {
    name: {
        type: String,
        min: 3,
        max: 100,
        required: true
    },
    
}