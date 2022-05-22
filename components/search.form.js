import React, { useState } from 'react';
import { useRouter } from 'next/router'
import {
    Form,
    FormControl,
    Button,
    Container,
    InputGroup
} from 'react-bootstrap';

export default function SearchForm() {
    const router = useRouter()
    const [search, setSearch] = useState(router.query?.query || '');

    const buscar = (e) => {
        e?.preventDefault();
        if (search.length > 0) {
            router.push({
                pathname: '/items',
                query: {
                    query: search
                }
            });
        } else {
            router.push({
                pathname: '/items'
            });
        }
    };
    return (
        <Container className="mb-3">
            <Form className="d-flex" onSubmit={buscar}>
                <InputGroup className="mt-1">
                    <FormControl
                        type="search"
                        placeholder="Buscar productos..."
                        aria-label="Buscar productos..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="searchform-button"
                    />
                    <Button variant="dark" onClick={() => buscar()}>Buscar</Button>
                </InputGroup>
            </Form>
        </Container>
    )
}
