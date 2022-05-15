import dbConnect from '../../lib/dbConnect';
import Item from '../../models/Item';
import formatPrice from '../../lib/formatPrice';
import React, { useState } from 'react';
import { Alert, Button, Col, Row, Image, Carousel, Container } from 'react-bootstrap';
import Head from 'next/head';

const ItemPage = ({ item, success }) => {
  const [show, setShow] = useState(item?.vendido || false);
  return (
    success ?
      <>
        <Head>
          <title>{item.nombre} - Venta de Garage</title>
        </Head>
        {show ?
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh no! El producto ya fue vendido!</Alert.Heading>
            <p>
              El producto que estas tratando de ver ya fue vendido a otra persona. Guardate esta pagina, porque si por algun motivo se cancela la compra, podras comprarlo!
            </p>
          </Alert> :
          null
        }
        <Container fluid>

          <Row className="item">
            <Col sm={6} >
              <Carousel draggable variant="dark">
                {item.imagen.map((link, index) => (
                  <Carousel.Item key={index}>
                    <Image src={link} fluid style={{ padding: 20 }} />
                  </Carousel.Item>
                ))}
              </Carousel>

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
        </Container>
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
    if (!item) {
      return { props: { item: null, success: false } }
    }
    item._id = item._id.toString();
    return { props: { item: item, success: true } };
  } else {
    return { props: { item: null, success: false } }
  }
}

export default ItemPage;
