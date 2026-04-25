import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend the Express Request interface to include our custom user payload
declare global {
  namespace Express {
    interface Request {
      user?: string | jwt.JwtPayload;
    }
  }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  // Extract the token from the header
  // Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5c... (the rest of the string)
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  /*[
  "Bearer",                                        // Index [0]
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ..."    // Index [1] 
    ]
  */

  const token = authHeader.split(' ')[1];

  try {
    // Verify the token using our secret
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret);

    // Attach the decoded payload to the request object
    // If jwt.verify is true - payload is returned , If false error 
    req.user = decoded;
    
    // 4. Move to the next middleware or controller
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};