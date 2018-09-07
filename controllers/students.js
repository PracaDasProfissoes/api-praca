const { Student, validadeStudent } = require('../models/student');

async function _list(req, res) {
  const students = await Student.find();
  res.send(students)
}

async function _get (req, res) {
  const student = await Student.findById(req.params.id);
  res.send(student);
}

async function _create (req, res, next) {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
}

async function _update (req, res) {
  const student = await Student.findOneAndUpdate(req.params.id);
  res.send(student);
}

async function _remove (req, res) {
  const student = await Student.findByIdAndRemove(req.params.id);
  res.send(student);
}

module.exports = {
  'list': _list,
  'get': _get,
  'create': _create,
  'update': _update,
  'remove': _remove
};
