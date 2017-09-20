export default `
  type Tweet {
    _id: String
    text: String
  }

  type Query {
    getTweets: [Tweet]
    getTweet(_id: ID!): Tweet
  }

  type Mutation {
    createTweet(text: String!): Tweet
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
