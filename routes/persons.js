module.exports = function(app) {
    const personCtrl = app.controllers.persons;


 /**
 * @swagger
 * /api/persons:
 *   get:
 *     tags:
 *       - Persons
 *     summary: Returns all persons
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of persons
 */
app.get('/api/persons', personCtrl.list);

/**
* @swagger
* /api/persons/{id}:
*   get:
*     tags:
*       - Persons
*     summary: Returns a single person
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: person's id
*         in: path
*         required: true
*         type: string
*     responses:
*       200:
*         description: A single person
*         schema:
*
*
*/
app.get('/api/persons/:id', personCtrl.get);

/**
 * @swagger
 * /api/persons:
 *   post:
 *     tags:
 *       - Persons
 *     summary: Creates a person
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
 *             - location
 *             - cpf
 *             - rg
 *             - email
 *             - phone
 *            properties:
 *             name:
 *               type: string
 *             cpf:
 *               type: string
 *             rg:
 *               type: string
 *             email:
 *               type: string
 *             phone:
 *                type: string
 *             location:
 *                type: string
 *            example: {
 *                "name": "João Maria",
 *                "cpf": "921.651.570-80",
 *                "rg": "5556667",
 *                "email": "user@user.user",
 *                "phone": "000000000",
 *                "location": "Av. 7 de Setembro, Nº 7, Bairro: Centro, Cidade: Açu",
 *            }
 *     responses:
 *       200:
 *         description: person created
 *       default:
 *           description: Error registering user
 */
app.post('/api/persons', personCtrl.create);

/**
* @swagger
* /api/persons/{id}:
*   put:
*     tags:
 *       - Persons
 *     summary: Updates a person
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
 *             - location
 *             - cpf
 *             - rg
 *             - email
 *             - phone
 *            properties:
 *             name:
 *               type: string
 *             cpf:
 *               type: string
 *             rg:
 *               type: string
 *             email:
 *               type: string
 *             phone:
 *                type: string
 *             location:
 *                type: string
 *            example: {
 *                "name": "João Maria",
 *                "cpf": "921.651.570-80",
 *                "rg": "5556667",
 *                "email": "user@user.user",
 *                "phone": "000000000",
 *                "location": "Av. 7 de Setembro, Nº 7, Bairro: Centro, Cidade: Açu",
 *            }
 *     responses:
 *       200:
 *         description: person updated
 *       default:
 *           description: Error registering user
*/
app.put('/api/persons/:id', personCtrl.update);

/**
* @swagger
* /api/persons/{id}:
*   delete:
*     tags:
*       - Persons
*     summary: Deletes a single person
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: person's id
*         in: path
*         required: true
*         type: string
*     responses:
*       200:
*         description: Successfully deleted
*/
app.delete('/api/persons/:id', personCtrl.remove);
};
