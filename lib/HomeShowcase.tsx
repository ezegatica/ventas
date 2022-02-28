import axios from "axios";
import React, { useEffect, useState } from "react";
import { ItemDTO } from "./redis";
import Link from "next/link";

export default function HomeShowcase() {
  useEffect(() => {
    getItems();
  }, []);

  const [items, setItems] = useState<ItemDTO[]>([]);

  const getItems = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/items`);
    setItems(data.items);
  };

  return (
    <div>
      <h1>HomeShowcase</h1>
      <ul>
        {items &&
          items.map((post: ItemDTO) => (
            <Link href={`/item/${post.entityId}`} key={post.entityId}>
              <li className="hover">
                {post.nombre} - {post.descripcion} - ${post.precio}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
