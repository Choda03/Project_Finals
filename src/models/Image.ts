import mongoose, { Schema, models } from 'mongoose';

const CommentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ImageSchema = new Schema({
  url: { type: String, required: true },
  originalName: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, default: '' },
  category: { type: String, required: true },
  size: { type: Number, required: true }, // in bytes
  mimeType: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  public: { type: Boolean, default: true },
  comments: [CommentSchema],
});

export default models.Image || mongoose.model('Image', ImageSchema);