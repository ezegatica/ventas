import { connect, ConnectOptions, connections } from "mongoose";
import { FilterQuery, QueryOptions } from "mongoose";
import Item, { ItemDocument, ItemInput } from "./model";

const { DB_URL = "" } = process.env;

const options: ConnectOptions = {
  autoIndex: true,
};

async function open() {
  console.log(connections);
  await connect(DB_URL, options);
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
