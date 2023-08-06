import React from 'react'
import ItemCard from '../ui/item-card'
import { getItems } from '../../lib/querys';

export default async function HomeItemGrid({query} : {query: string}) {
    const items = await getItems(query);
  return (
    <React.Fragment>

    {items.length > 0 ? (
        items.map((item) => <ItemCard item={item} key={item.slug} />)
        ) : (
            <p className="text-2xl font-bold text-gray-900">
          No se encontraron resultados para &quot;{query}&quot;
        </p>
      )}
      </React.Fragment>
  )
}
