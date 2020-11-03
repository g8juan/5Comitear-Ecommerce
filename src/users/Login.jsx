import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Login = ({ onSubmit, onChange, mail, password }) => {
  return (
    <Container className="m-5">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Correo electronico.</Form.Label>
          <Form.Control
            onChange={onChange}
            value={mail}
            id="email"
            type="email"
            placeholder="Ingresá tu correo electronico"
          />
          <Form.Text className="text-muted">
            Nunca vamos a compartir tus datos de usuario con alguien.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            onChange={onChange}
            value={password}
            id="password"
            type="password"
            placeholder="Ingresá tu contraseña."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
