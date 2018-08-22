const {Student,validadeStudent} = require('../models/student')
const _ = require('lodash')

function _list (req,res,next ){
    Student.find()
    .then(students => {res.send(students)})
    .catch(err => next(err))
}

function _get(req,res,next) {
    Student.findById(req.params.id)
    .then((student) => res.send(student))
    .catch(err => next(err))
}

function _create (req,res,next) {
    const {error} = validadeStudent(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let student = new Student(_.pick(req.body,['name','age','course','grade','genre']))
    student.save()
    .then(() => {res.send(student)})
    .catch(err => next(err))
}

function _update (req,res,next){
    Student.update({_id: req.params.ide}, {$set: req.body})
    .then((student) => {res.send(student)})
    .catch(err => {next(err)})
}

function _remove (req,res,next) {
    Student.findByIdAndRemove(req.params.id)
    .then((student) = res.send(student))
    .catch(err => { next(err) })
}

module.exports = {
    list: _list,
    get: _get,
    create : _create,
    update: _update,
    remove: _remove
}