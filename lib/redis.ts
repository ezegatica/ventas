import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

export class Item extends Entity {}

let schema = new Schema(
  Item,
  {
    imagen: { type: "string" },
    nombre: { type: "string", textSearch: true },
    precio: { type: "number" },
    descripcion: { type: "string", textSearch: true },
  },
  {
    dataStructure: "JSON",
  }
);

export async function searchItem(query: string): Promise<Item[]> {
  await connect();
  const repository = new Repository(schema, client);
  const items: Item[] = await repository.search().where('nombre').match(query).or('descripcion').match(query).return.all();
  return items;
}

export async function createItem(data: ItemDTO): Promise<string> {
  await connect();
  const repository = new Repository(schema, client);
  const item = repository.createEntity(data);
  const id: string = await repository.save(item);
  return id;
}

export async function createIndex() {
  await connect();
  const repository = new Repository(schema, client);
  await repository.createIndex();
}

export interface ItemForm {
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: string;
}
export interface ItemDTO {
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
}
