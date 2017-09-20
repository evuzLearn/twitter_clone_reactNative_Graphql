export default `
  scalar Date

  type Tweet {
    _id: String!
    text: String!
    createdAt: Date!
    updateAt: Date!
  }

  type Status {
    message: String!
  }

  type Query {
    getTweets: [Tweet]
    getTweet(_id: ID!): Tweet
  }

  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID): Status
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
