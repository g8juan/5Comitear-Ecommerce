//DEFAULT
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// GRID
import Grid from "@material-ui/core/Grid";

// CARD
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  rootCard: {
    marginTop: 50,
    maxWidth: 500,
    margin: "0 auto",
  },
  media: {
    height: 250,
    maxWidth: 250,
    margin: "0 auto",
  },
  buttons: {
    margin: "0 auto",
  },
}));

export default function Products({ products }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.buttons}> PRODUCTS </p>
      <Grid container spacing={3}>
        {products.map((product) => {
          return (

        <Grid item xs={3} key={product.id}>
          <Card className={classes.rootCard}>
            <CardActionArea>
            <Link to={`/products/${product.id}`}>
              <CardMedia
                className={classes.media}
                image={product.thumbnail}
                title={product.name}
              />
            </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
                <br/>
                Precio: $ {product.price} ARS
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions >
              <Button size="small" color="primary" className={classes.buttons}>
                Añadir al carrito
              </Button>
                <Button size="small" color="primary" className={classes.buttons}>
                <Link to={`/products/${product.id}`}>Ver Producto</Link>
                </Button> 
            </CardActions>
          </Card>
        </Grid>
        )

        })}
      </Grid>
    </div>
  );
}
