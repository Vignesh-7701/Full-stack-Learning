import express, { RequestHandler } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 3000;

// 1. A simple logging middleware so we can see the request journey
app.use((req, res, next) => {
    console.log(`[API Gateway] 🚦 Received ${req.method} request at ${req.url}`);
    next();
});

// 2. Health check route to verify the gateway is up
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'API Gateway is live!' });
});

// 3. The Proxy Rules
// FIX: The "double cast" (as unknown as RequestHandler) forcefully resolves monorepo type clashes
app.use('/api/users', createProxyMiddleware({ 
    target: 'http://user-service:3001', 
    changeOrigin: true,
    pathRewrite: { '^/api/users': '' }
}) as unknown as RequestHandler);

app.use('/api/bookings', createProxyMiddleware({ 
    target: 'http://booking-service:3002', 
    changeOrigin: true,
    pathRewrite: { '^/api/bookings': '' }
}) as unknown as RequestHandler);

// 4. Start the server
app.listen(PORT, () => {
    console.log(`[API Gateway] 🚀 Listening on port ${PORT}`);
});