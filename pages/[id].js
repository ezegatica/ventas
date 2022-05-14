
import dbConnect from '../lib/dbConnect'
import Item from '../models/Item'
import formatPrice from '../lib/formatPrice'
const ItemPage = ({ item }) => {
  return (
    <div>
      <p>{item.nombre}</p>
      <p>{item.descripcion}</p>
      <p>Precio: {formatPrice(item.precio)}</p>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const item = await Item.findById(params.id).lean()
  item._id = item._id.toString()

  return { props: { item: item } }
}

export default ItemPage
