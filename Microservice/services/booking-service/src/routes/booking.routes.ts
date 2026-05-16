import { Router } from 'express';
import { getBooking } from '../controllers/booking.controller';

const router = Router();

// The Gateway strips "/api/bookings", so this handles "/api/bookings/:id"
router.get('/:id', getBooking);

export default router;