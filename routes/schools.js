module.exports = function (app) {
  const schoolCtrl = app.controllers.schools;

  app.get('/api/schools', schoolCtrl.list);

  app.get('/api/schools/:id', schoolCtrl.get);

  app.post('/api/schools', schoolCtrl.create);

  app.put('/api/schools/:id', schoolCtrl.update);

  app.delete('/api/schools/:id', schoolCtrl.remove);
};
