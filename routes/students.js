module.exports = function (app) {
  const studentCrtl = app.controllers.students;

  app.get('/api/students', studentCrtl.list);

  app.get('/api/students/:id', studentCrtl.get);

  app.post('/api/students', studentCrtl.create);

  app.put('/api/students/:id', studentCrtl.update);

  app.delete('/api/students/:id', studentCrtl.remove);
};
