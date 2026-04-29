import { redisClient } from './redisClient';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import debug from 'debug';

import authRoutes from './routes/authRoutes';
import { verifyToken } from './middlewares/authMiddleware';
import { generateOpenAPIDocument } from './swagger';
import fileRoutes from './routes/fileRoutes';
import { start } from 'node:repl';

//debug
const serverLog = debug('app:server');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Swagger Documentation Route
const openApiDocument = generateOpenAPIDocument();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

// Public Routes
app.use('/api/auth', authRoutes);

// File upload
app.use('/api/files', fileRoutes);

// Protected Dummy Route
app.get('/api/protected', verifyToken, (req: Request, res: Response) => {
  // Because of the middleware, we know req.user exists and is valid here
  res.status(200).json({
    message: 'Welcome to the protected zone!',
    userData: req.user
  });
});

const startServer = async () => {
  try{
    await redisClient.connect();
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  // replacing with debug
  //serverLog(`Server is running on http://localhost:${PORT}`);
  //serverLog(`API Documentation available at http://localhost:${PORT}/api-docs`);
});
  }
    catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
    }
  }

startServer();