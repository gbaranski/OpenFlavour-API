import { Flavour } from './models';

export async function findAllFlavoursInDatabase() {
  const flavours = await Flavour.find({});
  return flavours;
}

export async function findFlavoursInDatabaseByName(key: String) {
  const flavours = await Flavour.find({
    name: { $regex: new RegExp(String(key), 'i') },
  });
  return flavours;
}

export async function findFlavoursInDatabaseByManufacturer(key: String) {
  const flavours = await Flavour.find({
    manufacturer: { $regex: new RegExp(String(key), 'i') },
  });
  return flavours;
}
