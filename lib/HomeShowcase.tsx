import axios from "axios";
import React, { useEffect, useState } from "react";
import { ItemDTO } from "./database";
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
            <Link href={`/item/${post.uid}`} key={post.uid}>
              <li className="hover">
                {post.nombre} - {post.descripcion} - ${post.precio}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
