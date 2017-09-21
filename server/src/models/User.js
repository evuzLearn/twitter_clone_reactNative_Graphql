import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    firstName: String,
    lastName: String,
    avatar: String,
    password: String,
    email: String,
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hasPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  _hasPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    console.log('auth');
    return compareSync(password, this.password);
  },
};

export default mongoose.model('User', UserSchema);
