import express from 'express';
import bookingRoutes from './routes/booking.routes';

const app = express();
app.use(express.json());

app.use('/', bookingRoutes);

// CRITICAL: This must run on 3002 so it doesn't clash with the User Service (3001)
const PORT = process.env.PORT || 3002; 

app.listen(PORT, () => {
    console.log(`[Booking Service] 🔵 Listening on port ${PORT}`);
});