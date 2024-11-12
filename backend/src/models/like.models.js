import mongoose, { Schema } from 'mongoose';

const LikeSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    likeBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const LikeModel = mongoose.model('Like', LikeSchema);
export default LikeModel;
