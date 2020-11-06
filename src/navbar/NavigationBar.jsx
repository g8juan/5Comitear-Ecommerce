import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';


export default function NavigationBar({handleSubmit, user}) {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/home">5mitear</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
      </Nav>

      <Form inline onSubmit={handleSubmit} >
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button type="submit" variant="outline-info" >Search</Button>
        {user.id ? (<div>
          <Nav.Link as={Link} to="/register">Sign up</Nav.Link>
          <Nav.Link as={Link} to="/login">Log in</Nav.Link>
        </div>) : (<div style={{color:"red"}}><Button as ={Link} to="/"> Log Out </Button></div>)}

      </Form>

    </Navbar>
  )
}

