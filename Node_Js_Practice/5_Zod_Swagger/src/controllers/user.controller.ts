import { Request, Response } from 'express';
import { z } from 'zod';
import logger from '../utils/logger';

// 1. Define the exact shape of the data we expect
export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
    age: z.number().min(18, 'Must be 18 or older').optional(),
  }),
});

// 2. The Controller Logic (only runs if validation passes)
export const registerUser = (req: Request, res: Response) => {
  const { email, username } = req.body;
  
  // we use our custom logger
  logger.info({ email, username }, 'New user registration initiated');

  res.status(201).json({
    status: 'success',
    message: 'User registered successfully',
    data: { email, username },
  });
};