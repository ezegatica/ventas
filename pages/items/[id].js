import dbConnect from '../../lib/dbConnect';
import Item from '../../models/Item';
import formatPrice from '../../lib/formatPrice';
import React, { useState } from 'react';
import { Alert, Button, Col, Row, Carousel, Container } from 'react-bootstrap';
import Head from 'next/head';
import Image from "next/image";
import SearchForm from '../../components/search.form';
import redis from '../../lib/redis';

const ItemPage = ({ item, success }) => {
  const [show, setShow] = useState(item?.vendido || false);
  return (
    success ?
      <>
        <Head>
          <title>{item.nombre} - Venta de Garage</title>
          <meta name="description" content={item.short_descripcion} />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#212529" />
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
        <SearchForm />
        <Container fluid>

          <Row className="item">
            <Col lg={6} >
              <Carousel draggable={false} variant="dark">
                {item.imagen.map((link, index) => (
                  <Carousel.Item key={index}>
                    <Image src={link} width='1000' height='500' quality={100} draggable={false} style={{objectFit: 'contain'}} placeholder='empty' />
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
        <SearchForm />
        <Container fluid>
          <h2>No se encontro el producto que está buscando. Prueba buscando otro.</h2>
        </Container>
      </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();
  if (params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const data = await redis.get(`${process.env.NODE_ENV}:item:${params.id}`)
    if (data) {
      const result = JSON.parse(data);
      return { props: { item: result, success: true } };
    } else {
      const item = await Item.findById(params.id).lean();
      if (!item) {
        return { props: { item: null, success: false } }
      }
      item._id = item._id.toString();
      await redis.set(`${process.env.NODE_ENV}:item:${params.id}`, JSON.stringify(item));
      return { props: { item: item, success: true } };
    }
  } else {
    return { props: { item: null, success: false } }
  }
}

export default ItemPage;
