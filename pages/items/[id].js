import dbConnect from '../../lib/dbConnect';
import Item from '../../models/Item';
import formatPrice from '../../lib/formatPrice';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const ItemPage = ({ item }) => {
  const [show, setShow] = useState(item.vendido);
  return (
    <>
      {show ?
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh no! El producto ya fue vendido!</Alert.Heading>
          <p>
            El producto que estas tratando de ver, ya fue vendido a otro usuario. En caso de que el otro usuario haya cancelado la compra, podras comprarlo!
          </p>
        </Alert> :
        null
  }
      <p>{item.nombre}</p>
      <p>{item.descripcion}</p>
      <p>Precio: {formatPrice(item.precio)}</p>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const item = await Item.findById(params.id).lean();
  item._id = item._id.toString();

  return { props: { item: item } };
}

export default ItemPage;
