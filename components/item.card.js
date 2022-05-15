import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import TruncateText from '../components/truncate.text';

export default function ItemCard({ item }) {
  return (
    <Col>
      <Link href={`/${item._id}`}>
        <Card style={{ width: '18rem' }} className="hoverable">
          <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>
              <TruncateText>
                {item.short_descripcion || item.descripcion}
              </TruncateText>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};
