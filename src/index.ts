import mongoose from 'mongoose';
import http from 'http';
import app from './app';

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI must be set in .env');
}

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to db'))
  .catch(err => console.error(err));

// eslint-disable-next-line import/first
import './database/models';

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}`);
