import { createClient } from 'redis';

// Create the global client instance
export const redisClient = createClient();

// Attach standard console logs for monitoring
redisClient.on('error', (err) => console.error('Redis Client Error:', err));
redisClient.on('connect', () => console.log('Connected to Redis Engine'));