import React, { useState } from 'react';
import { useRouter } from 'next/router'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Button,
  Image
} from 'react-bootstrap';
import Link from 'next/link';
import CustomSpan from './navbar.span'


export default function NavbarComponent() {
  const [search, setSearch] = useState('');
  const router = useRouter()
  const buscar = (e) => {
    e?.preventDefault();
    router.push({
      pathname: '/items',
      query: {
        query: search
      }
    });
  };

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
            <Form className="d-flex" onSubmit={buscar}>
              <FormControl
                type="search"
                placeholder="Buscador"
                className="me-2"
                aria-label="Buscador"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-light" onClick={() => buscar()}>Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
