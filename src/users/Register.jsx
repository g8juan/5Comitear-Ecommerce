import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="#">Grupo 5 E-Commerce P5.</Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({
  onChange,
  onSubmit,
  email,
  firstName,
  lastName,
  password,
  phone,
  address,
  error,
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                onChange={onChange}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                onChange={onChange}
                value={lastName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                onChange={onChange}
                value={email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
                value={password}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Dirección"
                type="direccion"
                id="address"
                onChange={onChange}
                value={address}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Telefono"
                type="phone"
                id="phone"
                onChange={onChange}
                value={phone}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Acepto los Términos y Condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad."
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
          {error ? (
            <Alert
              style={{ margin: "15px" }}
              variant="outlined"
              severity="error"
            >
              Pst! Todos los campos deben estar completos.
            </Alert>
          ) : null}

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Ya tienes una cuenta? iniciá sesión.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

/* import React from "react";
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
 */
