import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

mport Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="#">Grupo 5 E-Commerce P5,</Link> {new Date().getFullYear()}
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
    backgroundColor: theme.palette.warning.dark,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({
  onSubmit,
  onChange,
  email,
  password,
  error,
  handleClose,
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Iniciar sesión
          </Button>
          {error ? (
            <div>
              <Modal
                open={true}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div
                  style={{
                    display: "flex",
                    width: 200,
                    height: 100,
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    margin: "0 auto",

                    marginTop: 200,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <h2 id="simple-modal-title">Error</h2>
                    <p id="simple-modal-description">El usuario no es válido</p>
                  </div>
                  <button onClick={handleClose}>Cerrar</button>
                </div>
              </Modal>
              ;
            </div>
          ) : null}
          <Grid container>
            <Grid item xs>
              <Link to="/login" variant="body2">
                Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link to="register" variant="body2">
                {"No tenes una cuenta? Registrate."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

/* import React from "react";
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
 */
