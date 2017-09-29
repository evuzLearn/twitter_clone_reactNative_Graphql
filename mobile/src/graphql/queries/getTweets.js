import { gql } from 'react-apollo';

export default gql`
  {
    getTweets {
      _id
      text
      createdAt
      favoriteCount
      user {
        username
        firstName
        lastName
        avatar
      }
    }
  }
`;
