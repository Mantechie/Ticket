import Booking from '../models/Booking.js';
import Event from '../models/Event.js';

// @desc Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { eventId, tickets } = req.body;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.availableTickets < tickets) {
      return res.status(400).json({ message: 'Not enough tickets available' });
    }

    const totalAmount = tickets * event.price;

    // Reduce available tickets
    event.availableTickets -= tickets;
    await event.save();

    const booking = await Booking.create({
      user: req.user._id,
      event: eventId,
      tickets,
      totalAmount,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Get all bookings (Admin)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'name email')
      .populate('event', 'title date price');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Get user bookings
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate(
      'event',
      'title date venue price'
    );
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Cancel booking
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('event');

    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    // Only owner or admin can cancel
    if (booking.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    // Refund tickets
    booking.event.availableTickets += booking.tickets;
    await booking.event.save();

    booking.status = 'cancelled';
    await booking.save();

    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
