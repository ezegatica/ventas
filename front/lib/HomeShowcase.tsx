import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ItemDocument } from "./dto/Item.dto";

export default function HomeShowcase() {
  useEffect(() => {
    getItems();
  }, []);

  const [items, setItems] = useState<ItemDocument[]>([]);

  const getItems = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/items`);
    setItems(data.items);
  };

  return (
    <div>
      <h1>HomeShowcase</h1>
      <ul>
        {items &&
          items.map((post: ItemDocument) => (
            <Link href={`/item/${post._id}`} key={post._id}>
              <li className="hover">
                {post.nombre} - {post.descripcion} - ${post.precio}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
