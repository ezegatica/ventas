import dbConnect from '../../lib/dbConnect';
import Item from '../../models/Item';
import formatPrice from '../../lib/formatPrice';
import React, { useState } from 'react';
import { Alert, Button, Col, Row, Image } from 'react-bootstrap';

const ItemPage = ({ item, success }) => {
  const [show, setShow] = useState(item?.vendido || false);
  return (
    success ?
      <>
        {show ?
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh no! El producto ya fue vendido!</Alert.Heading>
            <p>
              El producto que estas tratando de ver ya fue vendido a otra persona. Guardate esta pagina, porque si por algun motivo se cancela la compra, podras comprarlo!
            </p>
          </Alert> :
          null
        }
        <Row className="item">
          <Col sm={6} >
            <Image src={item.imagen} fluid style={{ padding: 20 }} />
          </Col>
          <Col className="info">
            <h2>{item.nombre}</h2>
            <br />
            <br />
            <p>{item.descripcion}</p>
            <Row className="buttonRow">
              <Col style={{ textAlign: "right" }}>
                <p>Precio: {formatPrice(item.precio)}</p>
                <a href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CELULAR}&text=Hola! Estoy interesado en un producto de tu venta de garage '${item.nombre}'`}>
                  <Button id="buy" variant="primary" disabled={item.vendido}>
                    Consultar! {' '}
                    <Image src="/whatsapp.svg" height={24} width={24} />
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </> :
      <>
        <p>
          Producto no encontrado!
        </p>
      </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();
  if (params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const item = await Item.findById(params.id).lean();
    item._id = item._id.toString();
    return { props: { item: item, success: true } };
  } else {
    return { props: { item: null, success: false } }
  }
}

export default ItemPage;
