import dbConnect from '../../lib/dbConnect';
import Item from '../../models/Item';
import ItemCard from '../../components/item.card';
import { Row, Container } from 'react-bootstrap';

const Index = ({ items }) => (
  <Container fluid>
    <Row xs={2} sm={3} md={4} lg={6} className="g-4">
      {items.map(item => (
        <ItemCard item={item} key={item._id} />
      ))}
    </Row>
  </Container>
);

export async function getServerSideProps({ query: queryProp }) {
  await dbConnect();
  const { query } = queryProp;
  let result;
  if (query) {
    result = await Item.find({
      nombre: {
        $regex: query,
        $options: 'i'
      }
    });
  } else {
    result = await Item.find({});
  }
  const items = result.map(doc => {
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });
  return { props: { items: items } };
}

export default Index;
