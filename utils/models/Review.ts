import mongoose, { Schema } from 'mongoose';

const ReviewSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', index: true },
  authorId: { type: Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  text: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
