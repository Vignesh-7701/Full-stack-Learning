import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

// This MUST be called once before using .openapi() on any Zod schema
extendZodWithOpenApi(z);

export const loginRequestSchema = z.object({
  username: z.string().min(1, "Username is required").openapi({ example: 'admin' }),
  password: z.string().min(6, "Password must be at least 6 characters").openapi({ example: 'password123' }),
}).openapi('LoginRequest');

export const loginResponseSchema = z.object({
  message: z.string().openapi({ example: 'Login successful' }),
  token: z.string().openapi({ example: 'eyJhbGciOiJIUzI1NiIs...' }),
}).openapi('LoginResponse');