import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  items: [
    {
      ticketId: { type: Schema.Types.ObjectId, ref: 'TicketType' },
      eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
      qty: Number,
      priceAtPurchase: Number,
    },
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ['pending', 'paid', 'cancelled', 'refunded'],
    default: 'pending',
    index: true,
  },
  paymentId: { type: Schema.Types.ObjectId, ref: 'Payment' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
