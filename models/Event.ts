import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  title: { type: String, required: true, index: true },
  description: String,
  organizerId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  venueId: { type: Schema.Types.ObjectId, ref: 'Venue' },
  online: { type: Boolean, default: false },
  onlineUrl: String,
  startAt: Date,
  endAt: Date,
  tags: [String],
  status: {
    type: String,
    enum: ['draft', 'published', 'cancelled', 'completed'],
    default: 'draft',
    index: true,
  },
  images: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
