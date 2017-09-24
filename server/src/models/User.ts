import * as mongoose from 'mongoose';
import { Schema, Model, Document } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcrypt-nodejs';

import constants from '../config/constants';

export interface IUser {
  username: string;
  firstName: String;
  lastName: String;
  avatar: String;
  password: String;
  email: String;
}

export interface IUserModel extends IUser, Document {
  _hasPassword(password: string): string;
  authenticateUser(password: string): boolean;
  createToken(): string;
}

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
  _hasPassword(password: string): string {
    return hashSync(password);
  },
  authenticateUser(password: string): boolean {
    return compareSync(password, this.password);
  },
  createToken(): string {
    return jwt.sign({ _id: this._id }, constants.JWT_SECRET);
  },
};

export const User: Model<IUserModel> = mongoose.model<IUserModel>(
  'User',
  UserSchema,
);
