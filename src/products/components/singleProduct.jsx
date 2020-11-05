import React from 'react'

//STYLE
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  rootCard: {
    marginTop: 50,
    maxWidth: 500,
    margin: '0 auto'
  },
  media: {
    height: 500,
    width: 'auto',
  },
  buttons: {
    margin: '0 auto'
  }
});

export default function SingleProduct ({singleProduct}) {
  const classes = useStyles();
  return (
    <Card className={classes.rootCard}>
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={singleProduct.image}
        title={singleProduct.name}
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {singleProduct.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {singleProduct.description}
          <br/>
          Precio: $ {singleProduct.price} ARS
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" color="primary" className={classes.buttons}>
          Añadir al carrito
        </Button>
        <Button size="small" color="primary" className={classes.buttons}>
          Reviews
        </Button>
      </CardActions>
    </Card>
  )
}