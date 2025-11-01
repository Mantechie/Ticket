import mongoose, { Schema } from 'mongoose';

const TicketTypeSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', index: true, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  initialQuantity: { type: Number, default: 0 },
  available: { type: Number, default: 0 },
  sold: { type: Number, default: 0 },
  salesStart: Date,
  salesEnd: Date,
  perUserLimit: { type: Number, default: 10 },
});

export default mongoose.models.TicketType || mongoose.model('TicketType', TicketTypeSchema);
