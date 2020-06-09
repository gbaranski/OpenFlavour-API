import mongoose, { model } from 'mongoose';
import { FLAVOUR } from './index';

const FlavourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
});

export default model(FLAVOUR, FlavourSchema);
