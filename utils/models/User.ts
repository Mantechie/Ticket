import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  phone?: string;
  role: 'user' | 'organizer' | 'admin';
  passwordHash?: string;
  isVerified?: boolean;
  blocked?: boolean;
  walletBalance?: number;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true, unique: true },
  phone: { type: String, index: true },
  role: { type: String, enum: ['user', 'organizer', 'admin'], default: 'user', index: true },
  passwordHash: String,
  isVerified: { type: Boolean, default: false },
  blocked: { type: Boolean, default: false },
  walletBalance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
