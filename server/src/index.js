/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';

import constants from './config/constants';
import './config/db';

const app = express();

const PORT = constants.PORT;

app.use(bodyParser.json());

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
