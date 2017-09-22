import Tweet from '../../models/Tweet';
import { requireAuth } from '../../services/auth';

export default {
  getTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.find({}).sort({ createdAt: -1 });
    } catch (err) {
      throw err;
    }
  },
  getTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findById(_id);
    } catch (err) {
      throw err;
    }
  },
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.create(args);
    } catch (err) {
      throw err;
    }
  },
  updateTweet: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findByIdAndUpdate(_id, rest, { new: true });
    } catch (err) {
      throw err;
    }
  },
  deleteTweet: async (_, { _id }) => {
    try {
      await Tweet.findByIdAndRemove(_id);
      return {
        message: 'Delete Success!',
      };
    } catch (err) {
      throw err;
    }
  },
};
