module.exports = function (app) {
  const personCrtl = app.controllers.persons;

  app.get('/api/directors', personCrtl.list);

  app.get('/api/directors:/id', personCrtl.get);

  app.post('/api/directors', personCrtl.create);

  app.put('/api/directors/:id', personCrtl.update);

  app.delete('/api/directors/:id', personCrtl.remove);
};
