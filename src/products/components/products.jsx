//DEFAULT
import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

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
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '1rem',
    marginRight: '1rem'
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
  title: {
    fontSize: '1.5rem',
    margin: '1.5rem'
  },
  buttons: {
    margin: "0 auto",
  }
}));

export default function Products({products, addToCart, userType}) {
  const classes = useStyles();
  console.log("products",products)
  return (
    <div className={classes.root}>
      <p className={classes.title}> PRODUCTS </p>
      <Divider />
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
                      {product.stock ? product.name : product.name+" *sin stock"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                      <br />
                Price: $ {product.price} ARS
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions >
                  <Button onClick={() => addToCart(product)} size="small" color="primary" className={classes.buttons}>
                    Add to cart {/*//TODO:que haya algun tipo de confirmacion visual de que haya añadido un item al carrito*/}
                  </Button>
                  <Button size="small" color="primary" className={classes.buttons}>
                    <Link to={`/products/${product.id}`}>See item</Link>
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
