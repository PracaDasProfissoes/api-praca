/**
 * Copyright (C) 2018 Praça das Profissões - UFCG
 * All rights reserved.
 */
const swaggerJSDoc = require('swagger-jsdoc');

module.exports = (app) => {
  // swagger definition
  const swaggerDefinition = {
    info: {
      title: `Praça das Profissões API`,
      version: '2.0.0',
      description: 'Describes a RESTful API with Swagger'
    },
    host: 'localhost:3000',
    basePath: '/'
  };

  const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js']
  };

  // initialize swagger-jsdoc
  const swaggerSpec = swaggerJSDoc(options);

  // serve swagger
  app.get('/api/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};
