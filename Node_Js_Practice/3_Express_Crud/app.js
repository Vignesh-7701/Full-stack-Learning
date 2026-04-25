const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/userRoutes')

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// 1. Swagger Configuration Options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User CRUD API',
      version: '1.0.0',
      description: 'A simple Express CRUD API with MySQL',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // 2. Tell Swagger where to find our route documentation
  apis: ['./routes/userRoutes.js'], 
};

// 3. Generate the OpenAPI JSON
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// 4. Set up the Swagger UI Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());
app.use(routes)

app.listen(3000 , ()=> console.log("Server started on port 3000"))