import User from '../../models/User';
import { requireAuth } from '../../services/auth';

export default {
  signup: async (_, { fullName, ...rest }) => {
    const [firstName, ...lastName] = fullName.split(' ');
    try {
      const user = await User.create({ firstName, lastName, ...rest });
      return {
        token: user.createToken(),
      };
    } catch (err) {
      throw err;
    }
  },
  login: async (_, { email, password }) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not exist!');
      }
      if (!user.authenticateUser(password)) {
        throw new Error('Password not match!');
      }

      return {
        token: user.createToken(),
      };
    } catch (err) {
      throw err;
    }
  },
  me: async (_, args, { user }) => {
    try {
      const me = await requireAuth(user);
      return me;
    } catch (err) {
      throw err;
    }
  },
};
