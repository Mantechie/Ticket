import mongoose, { Schema } from 'mongoose';

const OtpSchema = new Schema({
  target: String,
  code: String,
  purpose: String,
  createdAt: { type: Date, default: Date.now },
  expireAt: { type: Date, index: true },
});
OtpSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.models.Otp || mongoose.model('Otp', OtpSchema);
