import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();


// Defined the strict schema for env variables.. 
const envSchema = z.object({
  PORT: z.string().transform((val) => parseInt(val, 10)),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  FRONTEND_URL: z.string().url(),
});


// Valaidate - If fail zod throws error and app won't start..
// safeParse will not crash the app instead it'll retuen an object. 
// { success : false , error : []}
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Invalid environment variables:', parsedEnv.error.format());
  process.exit(1); // Kill the process immediately
}

export const env = parsedEnv.data;
