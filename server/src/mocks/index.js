import faker from 'faker';
import Tweet from '../models/Tweet';
import User from '../models/User';

const TWEETS_TOTAL = 3;
const USER_TOTAL = 3;

export default async () => {
  try {
    if (process.env.NODE_ENV === 'dev') {
      const tweets = await Tweet.find({});
      if (!tweets.length) {
        await Tweet.remove();
        await User.remove();

        await Array.from({ length: USER_TOTAL }).forEach(async (_, i) => {
          const user = await User.create({
            email: faker.internet.email(),
            username: faker.internet.userName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
            password: 'password123',
          });

          await Array.from({ length: TWEETS_TOTAL }).forEach(
            async () =>
              await Tweet.create({
                text: faker.lorem.sentence(),
                user: user._id,
              }),
          );
        });
      }
    }
  } catch (err) {
    throw err;
  }
};
