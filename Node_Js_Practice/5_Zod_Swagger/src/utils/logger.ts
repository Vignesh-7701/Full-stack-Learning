import pino from 'pino';
import { env } from '../config/env';

const isDev = env.NODE_ENV === 'development';

const logger = pino({
  level: isDev ? 'debug' : 'info',
  transport: isDev
    ? {
        target: 'pino-pretty',
        options: { colorize: true, translateTime: 'SYS:standard' },
      }
    : {
        target: 'pino/file',
        options: { destination: './production.log', mkdir: true },
      },
});

export default logger;