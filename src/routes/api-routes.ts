import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

router.get('/', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', async (err, database) => {
    if (database) {
      const flavor = await database
        .db('flavors')
        .collection('test')
        .find({
          manufacturer: 'TPA',
        })
        .toArray();
      res.json(flavor);
      database.close();
    }
  });
});

export default router;
