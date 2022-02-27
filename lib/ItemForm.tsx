import React, { useState } from "react";
import { ItemDTO, ItemForm } from "./redis";
import axios, { AxiosResponse } from "axios";
export default function ItemFormComponent() {
  const [state, setState] = useState<ItemForm>({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data }: AxiosResponse<any> = await axios.post<ItemDTO>(
      "/api/items",
      {
        nombre: state.nombre,
        descripcion: state.descripcion,
        precio: parseInt(state.precio),
        imagen: state.imagen,
      }
    );
    setState({
      nombre: "",
      descripcion: "",
      precio: "",
      imagen: "",
    });
    console.log(data);
  };
  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type="text"
          name="nombre"
          onChange={updateState}
          value={state.nombre}
        />
      </label>
      <label>
        Descripcion
        <input
          type="text"
          name="descripcion"
          onChange={updateState}
          value={state.descripcion}
        />
      </label>
      <label>
        Precio
        <input
          type="number"
          name="precio"
          onChange={updateState}
          value={state.precio}
        />
      </label>
      <label>
        Imagen
        <input
          type="text"
          name="imagen"
          onChange={updateState}
          value={state.imagen}
        />
      </label>
      <button type="submit">Crear item</button>
    </form>
  );
}
