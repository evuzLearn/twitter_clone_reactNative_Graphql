import faker from 'faker';
import Tweet from '../models/Tweet';
import User from '../models/User';

const TWEETS_TOTAL = 10;

export default async () => {
  try {
    if (process.env.NODE_ENV === 'dev') {
      await Tweet.remove();
      await User.remove();
      await Array.from({ length: TWEETS_TOTAL }).forEach(
        async () => await Tweet.create({ text: faker.lorem.paragraphs(1) }),
      );
    }
  } catch (err) {
    throw err;
  }
};
