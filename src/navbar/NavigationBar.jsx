import React from "react";
import {Link} from "react-router-dom";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";

export default function NavigationBar({handleSubmit, user, logOut}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/home">
        5mitear
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/products">
          Products
        </Nav.Link>
        <Nav.Link as={Link} to="/categories">
          Categories
        </Nav.Link>
        {user.userType === "2" || user.userType === "3" ? (
          <NavDropdown title="Panel de control" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/admin/products/create">
              Añadir productos
            </NavDropdown.Item>
            {user.userType === "3" ? (
              <NavDropdown.Item as={Link} to="/admin/users">
                Panel de usuarios
              </NavDropdown.Item>
            ) : null }
          </NavDropdown>
        ) : null}
      </Nav>

      <Form inline="true" onSubmit={handleSubmit}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Nav className="mr-auto">
          {user.userType === "1" ? 
          <Button as={Link} to="/cart" className="m-1">
            My Cart {"  "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-cart"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </Button> 
          : null}
          {!user.id ? (
            <>
              <Button inline="true" as={Link} to="/register" className="m-1">Sign up{"  "}</Button>
              <Button as={Link} to="/login" className="m-1"> Log in </Button>
            </>
          ) : (
              <>{user.userType === "1" ? 
                <Button as={Link} to="/orders" className="m-1">My purchases {"  "}</Button>
              : null}
                <p style={{margin: '0.5rem', alignSelf: 'center', color: 'white'}}>Bienvenido {user.firstName}!</p>
                <Button onClick={logOut} as={Link} to="/" className="m-1">Log Out</Button>
              </>
            )}
        </Nav>
      </Form>
    </Navbar>
  );
}
