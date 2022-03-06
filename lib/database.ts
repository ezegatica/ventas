import { Client, Entity, Schema, Repository } from "redis-om";
import crypto from "crypto";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}
export async function disconnect() {
  if (client.isOpen()) {
    console.log(client.isOpen());
    await client.close();
  } 
}

export class Item extends Entity {}

let schema = new Schema(
  Item,
  {
    uid: { type: "string", textSearch: true },
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
  const items: Item[] = await repository
    .search()
    .where("nombre")
    .match(query)
    .or("descripcion")
    .match(query)
    .return.all();
  return items;
}

export async function searchItemByID(idInput: string): Promise<Item[]> {
  await connect();
  const repository = new Repository(schema, client);
  const items: Item[] = await repository
    .search()
    .where("nombre")
    .match(idInput)
    .or("descripcion")
    .match(idInput)
    .or("uid")
    .match(idInput)
    .return.all();
  return items;
}

export async function getAllItems(): Promise<Item[]> {
  await connect();
  const repository = new Repository(schema, client);
  const items: Item[] = await repository.search().return.all();
  return items;
}

export async function createItem(data: ItemDTO): Promise<string> {
  if (data.descripcion === "" || data.nombre === "" || !data) {
    throw new Error("El nombre o la descripcion no pueden estar vacios");
  }
  await connect();
  const repository = new Repository(schema, client);
  const item = repository.createEntity({
    nombre: data.nombre,
    descripcion: data.descripcion,
    imagen: data.imagen,
    precio: data.precio,
    uid: crypto.randomUUID().split("-").join("").substring(0, 5),
  });
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
  uid: string;
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
}