import { Request, Response, NextFunction } from 'express';
import { redisClient } from '../redisClient';

export const loginRateLimiter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Identify the user by their IP address
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    
    // Create the unique Redis key for this specific IP's login attempts
    const key = `rate_limit:login:${ip}`;
    const LIMIT = 5;
    const WINDOW_SECONDS = 60;

    // The Atomic Increment
    const currentCount = await redisClient.incr(key);

    // If this is the very first strike, start the 60-second TTL stopwatch
    if (currentCount === 1) {
      await redisClient.expire(key, WINDOW_SECONDS);
    }

    // Evaluate: Did they cross the line?
    if (currentCount > LIMIT) {
      console.warn(`🚨 Blocked IP ${ip}: Exceeded login limit.`);
      res.status(429).json({ 
        message: 'Too many login attempts. Please try again after 60 seconds.' 
      });
      return;
    }

    // Log the allowed attempt
    console.log(`🛡️ IP ${ip} login attempt ${currentCount}/${LIMIT}`);
    
    next();
  } catch (error) {
    // "Fail Open" Policy: If Redis crashes, don't lock everyone out of the app.
    console.error('⚠️ Redis error in rate limiter, bypassing check:', error);
    next();
  }
};