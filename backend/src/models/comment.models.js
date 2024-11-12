import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema(
  {
    content: {
      type: String,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    commentBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const CommentModel = mongoose.model('Comment', CommentSchema);
export default CommentModel;
