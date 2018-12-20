const School = require('../models/school');

async function list (req, res) {
  const schools = await School.find();
  res.send(schools);
}

async function get (req, res) {
  const school = await School.findById(req.params.id);
  if (!school) res.status(404).send('No school with the given id');
  res.send(school);
}

async function create (req, res, next) {
  const school = new School(req.body);
  await school.save();
  res.send(school);
}

async function update (req, res) {
  const school = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(school);
}

async function remove (req, res) {
  const school = await School.findByIdAndRemove(req.params.id);
  res.send(school);
}

module.exports = {
  list,
  get,
  create,
  update,
  remove
};
