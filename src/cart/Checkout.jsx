import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

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
  buttons: {
    margin: '1rem'
  }
}));

const Checkout = ({ handleChange, handleSubmit, error, user }) => {
  const classes = useStyles();
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <ShoppingCartIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Shipping Details
        </Typography>
            <Grid className={classes.form} container spacing={1}>
              <Grid item xs={1} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="Recipient Name"
                  placeholder={user.firstName}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Recipient Lastname"
                  placeholder={user.lastName}
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="zip"
                  label="ZIP Code"
                  name="zip"
                  autoComplete="zip"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="province"
                  label="Province"
                  type="province"
                  id="province"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="city"
                  label="City"
                  type="city"
                  id="city"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="street and number"
                  label="Street and Number"
                  type="street and number"
                  id="street and number"
                  placeholder={user.address}
                  onChange={handleChange}
                />
              </Grid>
              {error ? (
                <Alert variant="outlined" severity="error" className={classes.buttons}>
                  Pst! All fields must be filled.
                </Alert>
              ) : null}
            </Grid>
            <Grid container justify="space-around" >
            </Grid>
          </div>
          <Box mt={5}></Box>
        </Container>
        <Button
          type="submit"
          variant="contained"
          color='secondary'
          className={classes.buttons}
        >
          <Link to='/cart' style={{ color: 'white' }}>Back to cart</Link>
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.buttons}
        >
          Continue with Payment
          </Button>
      </form>
    </div>
  );
};

export default Checkout;
