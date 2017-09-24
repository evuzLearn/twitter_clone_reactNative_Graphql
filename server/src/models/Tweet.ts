import * as mongoose from 'mongoose';
import { Schema, Model, Document } from 'mongoose';

export interface ITweet {
  text: string;
  user: any;
  favoriteCount: number;
}

export interface ITweetModel extends ITweet, Document {}

const TweetSchema = new Schema(
  {
    text: {
      type: String,
      minlength: [5, 'Text need to be longer'],
      maxlength: [144, 'Text too long'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    favoriteCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export const Tweet: Model<ITweetModel> = mongoose.model<ITweetModel>(
  'Tweet',
  TweetSchema,
);
