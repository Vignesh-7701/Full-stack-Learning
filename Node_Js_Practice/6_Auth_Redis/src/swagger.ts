import { OpenAPIRegistry, OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { loginRequestSchema, loginResponseSchema } from './schemas/authSchema';
import { z } from 'zod';

export const registry = new OpenAPIRegistry();

// 1. Register the Bearer Auth security component so we can use tokens in Swagger
registry.registerComponent('securitySchemes', 'bearerAuth', {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
});


// 2. Register our /login route using our Zod schemas
registry.registerPath({
  method: 'post',
  path: '/api/auth/login',
  summary: 'User Login',
  description: 'Authenticates a user and returns a JWT token.',
  tags: ['Auth'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: loginRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful login',
      content: {
        'application/json': {
          schema: loginResponseSchema,
        },
      },
    },
    400: { description: 'Invalid input data' },
    401: { description: 'Invalid credentials' },
  },
});

registry.registerPath({
  method: 'post',
  path: '/api/files/upload',
  summary: 'Upload a PNG or PDF',
  description: 'Uploads a file to the server. Requires a valid JWT token.',
  tags: ['Files'],
  security: [{ bearerAuth: [] }], // This adds the padlock icon requiring the JWT
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              document: {
                type: 'string',
                format: 'binary', // This tells Swagger to show a file picker
                description: 'Select a PNG or PDF file (Max 5MB)'
              },
            },
            required: ['document']
          },
        },
      },
    },
  },
  responses: {
    200: { description: 'File uploaded successfully' },
    400: { description: 'Bad Request / Invalid File' },
    401: { description: 'Unauthorized' }
  },
});


registry.registerPath({
  method: 'get',
  path: '/api/files/{filename}',
  summary: 'View a File',
  description: 'Retrieves a previously uploaded file. Requires a valid JWT token.',
  tags: ['Files'],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      filename: z.string().openapi({ description: 'The exact name of the saved file' })
    })
  },
  responses: {
    200: { 
      description: 'The requested file',
      content: {
        'image/png': { schema: { type: 'string', format: 'binary' } },
        'application/pdf': { schema: { type: 'string', format: 'binary' } }
      }
    },
    404: { description: 'File not found' },
    401: { description: 'Unauthorized' }
  },
});

// 3. Export the generator function
export const generateOpenAPIDocument = () => {
  const generator = new OpenApiGeneratorV3(registry.definitions);
  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Backend Mastery API',
      description: 'Automated API documentation driven by Zod schemas.',
    },
    servers: [{ url: 'http://localhost:3000' }],
  });
};