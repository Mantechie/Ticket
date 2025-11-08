import express from 'express';
import {
  createBooking,
  getAllBookings,
  getUserBookings,
  cancelBooking,
} from '../controllers/bookingController.js';
import { protect, adminOnly } from '../middlewares/authMiddleware.js';

const router = express.Router();

// User routes
router.post('/', protect, createBooking);
router.get('/my', protect, getUserBookings);
router.put('/cancel/:id', protect, cancelBooking);

// Admin routes
router.get('/', protect, adminOnly, getAllBookings);

export default router;
