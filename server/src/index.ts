/* eslint-disable no-console */

import * as express from 'express';
import { createServer } from 'http';

import constants from './config/constants';
import middlewares from './config/middlewares';
import mocks from './mocks';

import './config/db';

const app = middlewares(express());

const graphQLServer = createServer(app);

mocks().then(() => {
  graphQLServer.listen(constants.PORT, (err: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`App listen to port: ${constants.PORT}`);
    }
  });
});
