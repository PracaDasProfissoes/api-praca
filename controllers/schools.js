const School = require('../models/school');

async function _list (req, res) {
  const schools = await School.find();
  res.send(schools);
}

async function _get (req, res) {
  const school = await School.findById(req.params.id);
  res.send(school);
}

async function _create (req, res, next) {
  const school = new School(req.body);
  await school.save();
  res.send(school);
}

async function _update (req, res) {
  const school = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(school);
}

async function _remove (req, res) {
  const school = await School.findByIdAndRemove(req.params.id);
  res.send(school);
}

module.exports = {
  'list': _list,
  'get': _get,
  'create': _create,
  'update': _update,
  'remove': _remove
};
