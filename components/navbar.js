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
          <Navbar.Brand href="/">Venta de garage</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='no-link' as={CustomSpan}>
                <Link href="/" >
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link className='no-link' as={CustomSpan}>
                <Link href="/items">
                  Items
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
