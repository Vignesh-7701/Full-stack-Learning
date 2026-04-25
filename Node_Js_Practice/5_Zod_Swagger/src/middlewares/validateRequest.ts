// src/middlewares/validateRequest.ts
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod'; // Keep imports super clean, just import 'z'
import logger from '../utils/logger';

export const validateRequest = (schema: z.ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next(); 
    } catch (error) {
      if (error instanceof z.ZodError) {
        
        logger.warn({ path: req.path, errors: error.issues }, 'Validation failed');
        res.status(400).json({
          status: 'error',
          message: 'Invalid request data',
          errors: error.issues, 
        });
        return;
      }
      next(error);
    }
  };
};