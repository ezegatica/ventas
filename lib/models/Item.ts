import mongoose from "mongoose";

export interface ItemInput {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

export interface ItemDocument extends ItemInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  _id?: string;
}

export type DocumentID = mongoose.Schema.Types.ObjectId;

const itemSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

itemSchema.index({ nombre: 1, descripcion: 1 });

export default mongoose.model<ItemDocument>("Item", itemSchema);
