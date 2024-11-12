import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    images: [
      {
        type: String,
      },
    ],
    checkin: {
      type: String,
    },
  },
  { timestamps: true },
);

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
