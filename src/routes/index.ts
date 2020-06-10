import express from 'express';
import {
  findFlavoursInDatabaseByName,
  findAllFlavoursInDatabase,
  findFlavoursInDatabaseByManufacturer,
} from '../database/findFlavours';
import { saveFlavourToDatabase } from '../database/addFlavours';
import { FlavourInterface } from '../types';

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
  req.body.forEach((flavour: FlavourInterface) => {
    saveFlavourToDatabase(flavour);
  });
  res.status(200).end();
});

export default router;
