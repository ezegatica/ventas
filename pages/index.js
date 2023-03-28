import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Link from 'next/link';

export default function index() {
  return <>
    <div className="container-fluid bg-dark text-light p-5 pb-0">
      <div className="container bg-dark p-5">
        <h1 className="display-4">Bienvenidos a mi venta de garage!</h1>
        <hr />
        <p>Pase y vea, sin compromiso.</p>
        <p>Si les interesa algo o quieren saber mas sobre alguna cosa, consultenme que sin problema les respondo.</p>
        <Link href="/items">
          <Button variant="outline-light">
            Ver el listado
          </Button>
        </Link>
      </div>
    </div>
    <Image fluid src="/waves.svg" />
  </>;
}
