const { School, validateSchool } = require('../models/school');
const _ = require('lodash');

function _list (req, res, next) {
  School.find()
    .then((schools) => {
      res.send(schools);
    })
    .catch((err) => next(err));
}

function _get (req, res, next) {
  School.findById(req.params.id)
    .then((school) => res.send(school))
    .catch((err) => next(err));
}

function _create (req, res, next) {
  const { error } = validateSchool(req.body);

  if (error) {
    return res.status(400).send(error.details[ 0 ].message);
  }

  const school = new School(_.pick(req.body, [ 'name', 'initials', 'cnpj' ]));

  school.save()
    .then(() => {
      res.send(school);
    })
    .catch((err) => next(err));
}

function _update (req, res, next) {
  School.update({ '_id': req.params.id }, { '$set': req.body })
    .then((school) => {
      res.send(school);
    })
    .catch((err) => {
      next(err);
    });
}

function _remove (req, res, next) {
  School.findByIdAndRemove(req.params.id)
    .then((school) => res.send(school))
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  'list': _list,
  'get': _get,
  'create': _create,
  'update': _update,
  'remove': _remove
};
