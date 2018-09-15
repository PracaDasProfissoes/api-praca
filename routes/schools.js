module.exports = function (app) {
  const schoolCtrl = app.controllers.schools;

  /**
 * @swagger
 * /api/schools:
 *   get:
 *     tags:
 *       - Schools
 *     summary: Returns all schools
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of schools
 */
  app.get('/api/schools', schoolCtrl.list);

  /**
 * @swagger
 * /api/schools/{id}:
 *   get:
 *     tags:
 *       - Schools
 *     summary: Returns a single school
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: school's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single school
 *         schema:
 *
 *
 */
  app.get('/api/schools/:id', schoolCtrl.get);

  /**
   * @swagger
   * /api/schools:
   *   post:
   *     tags:
   *       - Schools
   *     summary: Creates a School
   *     consumes:
   *       - application/json
   *     parameters:
   *        - name: body
   *          in: body
   *          required: true
   *          schema:
   *            type: object
   *            required:
   *             - name
   *             - type
   *             - initials
   *             - cnpj
   *             - email
   *             - password
   *             - telephone
   *             - location
   *             - director
   *             - president
   *            properties:
   *             name:
   *               type: string
   *             type:
   *               type: string
   *             initials:
   *               type: string
   *             cnpj:
   *               type: string
   *             email:
   *               type: string
   *             password:
   *               type: string
   *             telephone:
   *                type: string
   *             location:
   *                type: string
   *            example: {
   *                "name": "Escola",
   *                "type": "Pública",
   *                "initials": "Sigla",
   *                "cnpj": "68.978.394/0001-90",
   *                "email": "user@user.user",
   *                "password": "user",
   *                "telephone": "000000000",
   *                "location": "Av. 7 de Setembro, Nº 7, Bairro: Centro, Cidade: Açu",
   *                "president": "AGENT"
   *            }
   *     responses:
   *       200:
   *         description: School created
   *       default:
   *           description: Error registering user
   */
  app.post('/api/schools', schoolCtrl.create);

  /**
 * @swagger
 * /api/schools/{id}:
 *   put:
 *     tags:
   *       - Schools
   *     summary: Updates a School
   *     consumes:
   *       - application/json
   *     parameters:
   *        - name: id
   *          in: body
   *          required: true
   *          properties:
   *           id:
   *            type: string
   *        - name: body
   *          in: body
   *          required: true
   *          schema:
   *            type: object
   *            required:
   *             - name
   *             - type
   *             - initials
   *             - cnpj
   *             - email
   *             - password
   *             - telephone
   *             - location
   *             - director
   *             - president
   *            properties:
   *             name:
   *               type: string
   *             type:
   *               type: string
   *             initials:
   *               type: string
   *             cnpj:
   *               type: string
   *             email:
   *               type: string
   *             password:
   *               type: string
   *             telephone:
   *                type: string
   *             location:
   *                type: string
   *            example: {
   *                "name": "Escola",
   *                "type": "Pública",
   *                "initials": "Sigla",
   *                "cnpj": "68.978.394/0001-90",
   *                "email": "user@user.user",
   *                "password": "user",
   *                "telephone": "000000000",
   *                "location": "Av. 7 de Setembro, Nº 7, Bairro: Centro, Cidade: Açu",
   *                "president": "AGENT"
   *            }
   *     responses:
   *       200:
   *         description: School updated
   *       default:
   *           description: Error registering user
 */
  app.put('/api/schools/:id', schoolCtrl.update);

  /**
 * @swagger
 * /api/schools/{id}:
 *   delete:
 *     tags:
 *       - Schools
 *     summary: Deletes a single school
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: school's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
  app.delete('/api/schools/:id', schoolCtrl.remove);
};
