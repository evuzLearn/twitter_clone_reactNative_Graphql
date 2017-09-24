/* eslint-disable no-console */

import * as mongoose from 'mongoose';

import constants from './constants';

(<any>mongoose).Promise = global.Promise;

mongoose.set('debug', process.env.NODE_ENV === 'dev');

try {
  mongoose.connect(constants.DB_URL, {
    useMongoClient: true,
  });
} catch (err) {
  mongoose.createConnection(constants.DB_URL, {
    useMongoClient: true,
  });
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', err => {
    throw err;
  });
