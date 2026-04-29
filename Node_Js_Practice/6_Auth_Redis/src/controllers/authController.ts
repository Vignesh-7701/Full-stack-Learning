import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { loginRequestSchema } from '../schemas/authSchema';
import debug from 'debug';


// Initialize the auth namespace
const authLog = debug('app:auth');

// The mock database
const users = [
  { id: 1, username: 'admin', password: 'password123', role: 'admin' },
  { id: 2, username: 'user', password: 'password123', role: 'user' }
];

export const login = (req: Request, res: Response): void => {

//Validate incoming request body against our Zod schema

  const validationResult = loginRequestSchema.safeParse(req.body);
  
  if (!validationResult.success) {
    res.status(400).json({ 
      message: 'Invalid input', 
      errors: validationResult.error.flatten().fieldErrors
    });
    return;
  }

  const { username, password } = req.body;

  // 1. Verify credentials
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    // Log failure
    authLog(`Failed login attempt for username: ${username}`);
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  // 2. Create the payload (what we want to store in the token)
  const payload = {
    id: user.id,
    role: user.role
  };

  // 3. Sign the token
  const secret = process.env.JWT_SECRET as string;
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });

  // 4. Send it back
  // Log successes
  authLog(`Successful login for user ID: ${user.id}`);
  res.status(200).json({
    message: 'Login successful',
    token: token
  });
};