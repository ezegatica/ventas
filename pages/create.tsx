import type { NextPage } from 'next'
import ItemForm from '../lib/ItemForm'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Create item</h1>
      <ItemForm/>
    </div>
  )
}

export default Home
