import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ItemInput } from "./models/Item";
export default function ItemFormComponent() {
  const [state, setState] = useState<ItemInput>({
    nombre: "",
    descripcion: "",
    precio: +0,
    imagen: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data }: AxiosResponse<any> = await axios.post<ItemInput>(
      "/api/item",
      {
        nombre: state.nombre,
        descripcion: state.descripcion,
        precio: state.precio,
        imagen: state.imagen,
      }
    );
    setState({
      nombre: "",
      descripcion: "",
      precio: 0,
      imagen: "",
    });
    // console.log(data);
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
