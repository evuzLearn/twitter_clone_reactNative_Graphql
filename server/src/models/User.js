import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcrypt-nodejs';

import constants from '../config/constants';

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
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign({ _id: this._id }, constants.JWT_SECRET);
  },
};

export default mongoose.model('User', UserSchema);
