import mongoose from 'mongoose';
import { FLAVOUR } from './models';
import { FlavourInterface } from '../types';

const FlavourSchema = mongoose.model(FLAVOUR);

export async function addSingleFlavourToDatabase(flavour: FlavourInterface) {
  const newFlavour = new FlavourSchema({
    name: flavour.name,
    manufacturer: flavour.manufacturer,
  });
  await newFlavour.save();
}
