// eslint-disable-next-line no-unused-vars
import mongoose, { Schema, Document } from 'mongoose';

const VenueSchema = new Schema({
  name: { type: String, required: true },
  address: {
    line1: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
  },
  coordinates: { lat: Number, lng: Number },
  capacity: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Venue || mongoose.model('Venue', VenueSchema);
