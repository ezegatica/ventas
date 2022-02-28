import axios from "axios";
import React from "react";
import { ItemDTO } from "./redis";

export default function HomeShowcase(props: any) {
  console.log(props);

  return (
    <div>
      <h1>HomeShowcase</h1>
      <ul>
        {/* {props.posts.map((post: ItemDTO) => (
          <li key={post.id}>
            {post.nombre} - {post.descripcion} - ${post.precio}
          </li>
        ))} */}
      </ul>
    </div>
  );
}