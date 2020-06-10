import express from 'express';
import {
  findFlavoursInDatabaseByName,
  findAllFlavoursInDatabase,
  findFlavoursInDatabaseByManufacturer,
} from '../database/findFlavours';
import { saveFlavourToDatabase } from '../database/addFlavours';
import { FlavourInterface } from '../types';
import { authenticate } from '../database/authenticate';

const router = express.Router();

router.get('/byManufacturer', async (req, res) => {
  if (!req.query.key) {
    res.status(400).end();
  }
  res.send(await findFlavoursInDatabaseByManufacturer(String(req.query.key)));
  console.log(`Searching database by manufacturer using ${req.query.key}`);
});

router.get('/byName', async (req, res) => {
  if (!req.query.key) {
    res.status(400).end();
    return;
  }
  res.send(await findFlavoursInDatabaseByName(String(req.query.key)));
  console.log(`Searching database by name using ${req.query.key}`);
});

router.get('/findAll', async (req, res) => {
  res.send(await findAllFlavoursInDatabase());
  console.log('Searching database by all');
});

router.use(express.json());

router.post('/addFlavour', async (req, res) => {
  const token = req.header('token');
  if (token) {
    if (!authenticate(token)) {
      res.status(401).end();
      return;
    }
  } else {
    res.status(401).end();
    return;
  }

  req.body.forEach((flavour: FlavourInterface) => {
    saveFlavourToDatabase(flavour);
  });
  res.status(200).end();
});

export default router;
