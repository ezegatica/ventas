import React from 'react'
import ItemCard from '../ui/item-card'
import { getItems } from '../../lib/querys';

export default async function HomeItemGrid() {
    const items = await getItems();
  return (
    <React.Fragment>
    {items.length > 0 ? (
        items.map((item) => <ItemCard item={item} key={item.slug} />)
        ) : (
            <p className="text-2xl font-bold text-gray-900">
          No se encontraron items a la venta!
        </p>
      )}
      </React.Fragment>
  )
}
