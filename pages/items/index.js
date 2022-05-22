import dbConnect from '../../lib/dbConnect';
import SearchForm from '../../components/search.form';
import Item from '../../models/Item';
import ItemCard from '../../components/item.card';
import { Row, Container } from 'react-bootstrap';
import redis from '../../lib/redis';

const Index = ({ items }) => (
  <>
    <SearchForm />
    <Container fluid>
      {items.length > 0 ? (
        <Row xs={2} sm={3} md={4} lg={6} className="g-4">
          {items.map(item => (
            <ItemCard item={item} key={item._id} />
          ))}
        </Row>
      ) : (
        <h2>No se encontraron productos con ese término. Prueba con otro</h2>
      )}
    </Container>
  </>
);

export async function getServerSideProps({ query: queryProp }) {
  await dbConnect();
  const { query } = queryProp;
  let result;
  let fromCache = false;
  if (query) {
    const data = await redis.get(`${process.env.NODE_ENV}:query:${query}`)
    if (data) {
      result = JSON.parse(data);
      fromCache = true;
    } else {
      result = await Item.find({
        $or: [
          {
            nombre: {
              $regex: query,
              $options: 'i'
            },
          }, {
            short_descripcion: {
              $regex: query,
              $options: 'i'
            }
          }
        ]
      });
      await redis.set(`${process.env.NODE_ENV}:query:${query}`, JSON.stringify(result));
    }

  } else {
    const data = await redis.get(`${process.env.NODE_ENV}:list:all`)
    if (data) {
      result = JSON.parse(data);
      fromCache = true;
    } else {
      result = await Item.find({});
      await redis.set(`${process.env.NODE_ENV}:list:all`, JSON.stringify(result));
    }
  }
  if (fromCache) {
    return {
      props: {
        items: result
      }
    }
  } else {
    const items = result.map(doc => {
      const item = doc.toObject();
      item._id = item._id.toString();
      return item;
    });
    return { props: { items: items || [] } };
  }
}

export default Index;
