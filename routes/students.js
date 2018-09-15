module.exports = function (app) {
  const studentCrtl = app.controllers.students;

  /**
 * @swagger
 * /api/students:
 *   get:
 *     tags:
 *       - Students
 *     summary: Returns all students
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of schools
 */
  app.get('/api/students', studentCrtl.list);

  /**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     tags:
 *       - Students
 *     summary: Returns a single school
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: student's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single school
 */
  app.get('/api/students/:id', studentCrtl.get);

  /**
   * @swagger
   * /api/students:
   *   post:
   *     tags:
   *       - Students
   *     summary: Creates a Student
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
   *             - age
   *             - course
   *             - grade
   *             - genre
   *            properties:
   *             name:
   *               type: string
   *             age:
   *               type: int
   *             course:
   *               type: string
   *             grade:
   *               type: string
   *             genre:
   *               type: string
   *            example: {
   *                "name": "Maria Clara",
   *                "age": 17,
   *                "course": "Medicina",
   *                "grade": "3",
   *                "genre": "female"
   *            }
   *     responses:
   *       200:
   *         description: Student created
   *       default:
   *           description: Error registering user
   */
  app.post('/api/students', studentCrtl.create);

  /**
   * @swagger
   * /api/students:
   *   put:
   *     tags:
   *       - Students
   *     summary: Updates a Student
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
   *             - age
   *             - course
   *             - grade
   *             - genre
   *            properties:
   *             name:
   *               type: string
   *             age:
   *               type: int
   *             course:
   *               type: string
   *             grade:
   *               type: string
   *             genre:
   *               type: string
   *            example: {
   *                "name": "Maria Clara",
   *                "age": 17,
   *                "course": "Medicina",
   *                "grade": "3",
   *                "genre": "female"
   *            }
   *     responses:
   *       200:
   *         description: Student created
   *       default:
   *           description: Error registering student
   */
  app.put('/api/students/:id', studentCrtl.update);

  /**
 * @swagger
 * /api/student/{id}:
 *   delete:
 *     tags:
 *       - Students
 *     summary: Deletes a single student
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: student's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
  app.delete('/api/students/:id', studentCrtl.remove);
};
