import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Badge } from 'react-bootstrap';
import formatPrice from '../lib/formatPrice';
export default function ItemCard({ item }) {
  return (
    <Col>
      <Link href={`/items/${item._id}`}>
        <Card className="hoverable">
          <Card.Img variant="top" src={item.imagen} height={224} width={224} style={{objectFit: 'contain'}}/>
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

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};
