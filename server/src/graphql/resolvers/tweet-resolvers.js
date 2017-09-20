import Tweet from '../../models/Tweet';

export default {
  getTweets: () => Tweet.find({}),
  getTweet: (_, { _id }) => Tweet.findById(_id),
  createTweet: (_, args) => Tweet.create(args)
};
