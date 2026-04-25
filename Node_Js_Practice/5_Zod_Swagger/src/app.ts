import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import pinoHttp from 'pino-http';
import swaggerUi from 'swagger-ui-express';

import { env } from './config/env';
import logger from './utils/logger';
import { swaggerSpec } from './config/swagger';
import userRoutes from './routes/user.routes';

const app: Application = express();

//Helmet secures Express by setting various HTTP headers.
//It mitigates XSS, clickjacking, and removes the 'X-Powered-By' header.
app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_URL, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
  })
);
app.use(express.json());


// Log every incoming HTTP request automatically
app.use(pinoHttp({ logger }));

// API DOCUMENTATION
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Routes
app.use('/api/users', userRoutes);


app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Fortress is secure and running.',
    environment: env.NODE_ENV,
  });
});

export default app;