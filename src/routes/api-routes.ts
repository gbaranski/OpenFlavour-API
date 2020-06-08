import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

router.get('/byManufacturer', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', async (err, database) => {
    if (database) {
      const flavor = await database
        .db('flavors')
        .collection('test')
        .find({
          manufacturer: { $regex: `.*${req.query.key?.toString().toUpperCase()}.*` },
        })
        .toArray();
      res.json(flavor);
      database.close();
    }
  });
});

router.get('/byName', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', async (err, database) => {
    if (database) {
      const flavor = await database
        .db('flavors')
        .collection('test')
        .find({
          name: { $regex: `.*${req.query.key}.*` },
        })
        .toArray();
      res.json(flavor);
      database.close();
    }
  });
});

export default router;
