import React from 'react'
 import {Link} from 'react-router-dom'
 import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';

export default function NavigationBar({ handleSubmit }) {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
      </Nav>

      <Form onSubmit={handleSubmit} >
        <FormControl  type="text" placeholder="Search" className="mr-sm-2"/>
        <Button type="submit" variant="outline-info">Search</Button>
      </Form>

    </Navbar>
  )
}

