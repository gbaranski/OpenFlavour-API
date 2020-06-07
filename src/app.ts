import express from 'express';
import { MongoClient } from 'mongodb';

MongoClient.connect('mongodb://localhost:27017');

const app = express();

app.get('/', (req, res) => {
  console.log('New request from /');
  res.send('Hello');
});

export default app;
