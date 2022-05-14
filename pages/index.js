import dbConnect from '../lib/dbConnect'
import Item from '../models/Item'
import Link from 'next/link'
const Index = ({ items }) => (
  <>
    <ul>
      {items.map(item => (
        <li key={item._id}>
          <Link href={`/${item._id}`}>
            <a>
              {item.nombre}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export async function getServerSideProps() {
  await dbConnect()

  const result = await Item.find({})
  const items = result.map((doc) => {
    const item = doc.toObject()
    item._id = item._id.toString()
    return item
  })

  return { props: { items: items } }
}

export default Index
