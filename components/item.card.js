import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { Col, Badge } from 'react-bootstrap';
import formatPrice from '../lib/formatPrice';
import Image from 'next/image';
export default function ItemCard({ item }) {
  return (
    <Col className="no-link">
      <Link href={`/items/${item._id}`} >
        <Card className="hoverable" >
          <Card.Img as={Image} src={item.imagen[0]} height={224} width={224} style={{objectFit: 'contain'}} quality={50} alt={`Imagen de ${item.nombre}`} placeholder="empty" loading='lazy' />
          {/* <Card.Img as={Image} variant="top" src={item.imagen[0]} alt={`Imagen de ${item.nombre}`} height={224} width={224} style={{objectFit: 'contain'}}/> */}
          <Card.Body>
            <Card.Title>{item.nombre} {item.vendido ? <Badge bg="danger">Vendido</Badge>: null}</Card.Title>
            <Card.Text>
              {item.short_descripcion}
            </Card.Text>
            <Card.Footer>
              {formatPrice(item.precio)}
            </Card.Footer>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

