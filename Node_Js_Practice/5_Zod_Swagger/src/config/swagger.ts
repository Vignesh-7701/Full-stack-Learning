import swaggerJsdoc from 'swagger-jsdoc';
import { env } from './env';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Advanced Playground API',
      version: '1.0.0',
      description: 'API documentation for the advanced Node.js architecture sprint.',
    },
    servers: [
      {
        url: `http://localhost:${env.PORT}`,
        description: 'Development Server',
      },
    ],
  },
  // This tells Swagger where to look for our route annotations
  apis: ['./src/routes/*.ts'], 
};

export const swaggerSpec = swaggerJsdoc(options);