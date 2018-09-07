module.exports = function (app) {
  const schoolCtrl = app.controllers.schools;

 /**
 * @swagger
 * /api/schools:
 *   get:
 *     tags:
 *       - Schools
 *     description: Returns all schools
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies  
 */
  app.get('/api/schools', schoolCtrl.list);

  
  app.get('/api/schools/:id', schoolCtrl.get);

  app.post('/api/schools', schoolCtrl.create);

  app.put('/api/schools/:id', schoolCtrl.update);

  app.delete('/api/schools/:id', schoolCtrl.remove);
};
