import mongoose, { connect, ConnectOptions, connections } from "mongoose";
import { FilterQuery, QueryOptions } from "mongoose";
import Item, { ItemDocument, ItemInput } from "./models/Item";

const { DB_URL = "" } = process.env;

const options: ConnectOptions = {
  autoIndex: true,
};
connect(DB_URL, options);

async function open() {
  // console.log(mongoose.);
}

export async function searchItem(query: string): Promise<ItemDocument[]> {
  await open();
  const items: ItemDocument[]  = await Item.find({
    $or: [{ nombre: query }, { descripcion: query }],
  });
  return items;
}

export async function searchItemByID(idInput: string): Promise<ItemDocument> {
    await open();
    const item: ItemDocument | null  = await Item.findById(idInput);
    if (!item || item === null) {
        throw new Error("item-not-found");
    }
    return item;
}

export async function getAllItems(): Promise<ItemDocument[]> {
  await open();
  const items: ItemDocument[] = await Item.find();
  return items;
}

export async function createItem(data: ItemInput): Promise<string> {
  if (data.descripcion === "" || data.nombre === "" || !data) {
    throw new Error("El nombre o la descripcion no pueden estar vacios");
  }
  await open();
  const item = new Item({
    nombre: data.nombre,
    descripcion: data.descripcion,
    imagen: data.imagen,
    precio: data.precio,
  });
  const doc: ItemDocument & { _id: any; } = await item.save();
  return doc._id;
}