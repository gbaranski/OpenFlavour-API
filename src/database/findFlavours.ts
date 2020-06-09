import { Flavour } from './models';

export async function findAllFlavoursInDatabase() {
  const flavours = await Flavour.find({});
  return flavours;
}

export async function findFlavoursInDatabaseByName(key: String) {
  const flavours = await Flavour.find({
    name: /key/i,
  });
  return flavours;
}
