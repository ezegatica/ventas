import React from 'react';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import Link from 'next/link';
import CustomSpan from './navbar.span'

export default function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/items">Venta de garage</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
