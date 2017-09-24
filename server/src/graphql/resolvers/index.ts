import * as GraphQLDate from 'graphql-date';

import TweetResolvers from './tweet-resolvers';
import UserResolvers from './user-resolvers';

export default {
  Date: GraphQLDate,
  Query: {
    getTweets: TweetResolvers.getTweets,
    getTweet: TweetResolvers.getTweet,
    getUserTweets: TweetResolvers.getUserTweets,
    me: UserResolvers.me,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login,
  },
};
