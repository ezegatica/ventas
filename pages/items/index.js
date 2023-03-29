import dbConnect from '../../lib/dbConnect';
import SearchForm from '../../components/search.form';
import Item from '../../models/Item';
import ItemCard from '../../components/item.card';
import { Row, Container } from 'react-bootstrap';

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
      if (result.length !== 0) {
      }
    }

  } else {
    const data = false;
    if (data) {
      result = JSON.parse(data);
      fromCache = true;
    } else {
      result = await Item.find({});
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
