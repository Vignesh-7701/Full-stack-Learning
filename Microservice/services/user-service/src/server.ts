import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
app.use(express.json());

// Load our routes
app.use('/', userRoutes);

const PORT = process.env.PORT || 3001; // Notice this is 3001!

app.listen(PORT, () => {
    console.log(`[User Service] 🟢 Listening on port ${PORT}`);
});