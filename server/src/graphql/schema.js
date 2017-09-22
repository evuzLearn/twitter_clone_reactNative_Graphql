export default `
  scalar Date

  type Tweet {
    _id: String!
    text: String!
    createdAt: Date!
    updateAt: Date!
  }

  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Status {
    message: String!
  }

  type Auth {
    token: String!
  }

  type Query {
    getTweets: [Tweet]
    getTweet(_id: ID!): Tweet
    me: User
  }

  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID): Status,
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String, password: String!): Auth
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
