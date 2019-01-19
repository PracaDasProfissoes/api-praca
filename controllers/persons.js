const Person = require('../models/person');

async function _list (req, res) {
    const persons = await Person.find();
    res.send(persons);
  }
  
  async function _get (req, res) {
    const person = await Person.findById(req.params.id);
    res.send(person);
  }
  
  async function _create (req, res, next) {
    const person = new Person(req.body);
    await person.save();
    res.send(person);
  }
  
  async function _update (req, res) {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(person);
  }
  
  async function _remove (req, res) {
    const person = await Person.findByIdAndRemove(req.params.id);
    res.send(person);
  }
  
  module.exports = {
    'list': _list,
    'get': _get,
    'create': _create,
    'update': _update,
    'remove': _remove
  };