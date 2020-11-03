import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";

const Register = ({
  onChange,
  onSubmit,
  email,
  firstName,
  lastName,
  password,
  phone,
  address,
}) => {
  return (
    <Container className="m-5">
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Ingresá tu correo electrónico."
              value={email}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Pst! Elegí una contraseña segura."
              value={password}
              onChange={onChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            id="firstName"
            placeholder="Ej: Juan."
            value={firstName}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Apellido </Form.Label>
          <Form.Control id="lastName" value={lastName} onChange={onChange} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              id="address"
              placeholder="Pirovano 54"
              value={address}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Numero de telefono</Form.Label>
            <Form.Control id="phone" value={phone} onChange={onChange} />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
