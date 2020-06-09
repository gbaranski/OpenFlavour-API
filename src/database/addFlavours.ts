import mongoose from 'mongoose';
import { FLAVOUR } from './models';
import { FlavourInterface } from '../types';

const FlavourSchema = mongoose.model(FLAVOUR);

export async function saveFlavourToDatabase(flavour: FlavourInterface) {
  const newFlavour = new FlavourSchema({
    name: flavour.name,
    manufacturer: flavour.manufacturer,
  });
  await newFlavour.save();
}
