import * as GraphQLDate from 'graphql-date';

import TweetResolvers from './tweet-resolvers';
import UserResolvers from './user-resolvers';
import { User } from '../../models/User';

export default {
  Date: GraphQLDate,
  Tweet: {
    user: ({user}) => User.findById(user)
  },
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
