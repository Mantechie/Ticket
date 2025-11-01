import mongoose, { Schema } from 'mongoose';

const PaymentSchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', index: true },
  gateway: String,
  gatewayId: String,
  amount: Number,
  status: {
    type: String,
    enum: ['initiated', 'success', 'failed', 'refunded'],
    default: 'initiated',
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
