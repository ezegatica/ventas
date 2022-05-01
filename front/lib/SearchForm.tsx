import axios from "axios";
import { useState } from "react";

export default function SearchItem() {
  const [hits, setHits] = useState([]);

  const search = async (e: any) => {
    e.preventDefault();
    const query: string = e.target.value;
    if (query.length > 2) {
      const params = new URLSearchParams({ query });
      const res = await axios.get(`/api/search?${params}`);
      setHits(res.data["items"]);
    }
  };

  return (
    <div>
      <label>Query:<input onChange={search} type="text" /></label>
      <ul>
        {hits.map((hit: any) => (
          <li key={hit.id}>
            {hit.nombre} - {hit.descripcion} - ${hit.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}
