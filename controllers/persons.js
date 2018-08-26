const { Person, validadePerson } = require('../models/person')
const _ = require('lodash')

function _list (req,res,next) {
    Person.find()
        .then(persons => {res.send(persons) })
        .catch(err => next(err)) 
}

function _get (req, res, next) {
    Person.findById(req.params.id)
        .then((person) => res.send(person))
        .catch(err => next(err))
}

function _create (req, res, next) {
    const {error} = validadePerson(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    let person = new Person(_.pick(req.body, ['name','address','cpf','rg','email']))
    person.save()
        .then(() => {res.send(person)})
        .catch(err => next(err))
}

function _update (req,res, next) {
    Person.update({_id: req.params.id }, {$set: req.body})
        .then((person) => {res.send(person) })
        .catch(err => {next(err) })
}

function _remove (req,res,next) {
    Person.findByIdAndRemove(req.params.id)
        .then((person) => res.send(person))
        .catch(err => {next(err)})
}

module.exports = {
    list : _list,
    get: _get,
    create: _create,
    update: _update,
    remove: _remove
}