export interface ItemInput {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export interface ItemDocument extends ItemInput {
  _id: string;
}
