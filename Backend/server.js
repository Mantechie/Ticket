import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from '../Backend/Routes/authRoutes.js';
import eventRoutes from '../Backend/Routes/eventRoutes.js';
import bookingRoutes from '../Backend/Routes/bookingRoutes.js';
import userRoutes from '../Backend/Routes/userRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req, res) => res.send('🎟️ TicketZilla Backend Running'));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
