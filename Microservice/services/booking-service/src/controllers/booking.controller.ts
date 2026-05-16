import { Request, Response } from 'express';
import * as BookingService from '../services/booking.service';

export const getBooking = async (req: Request, res: Response) => {
    const bookingId = req.params.id as string; 
    
    console.log(`[Booking Controller] ⚙️ Processing request for booking ${bookingId}`);
    
    try {
        const booking = await BookingService.getBookingById(bookingId);
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};