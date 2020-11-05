import React from 'react'
import {Link} from "react-router-dom";

// STYLES
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    padding: 50,
    width: 'auto',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Products = ({products}) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto'}}>
          <ListSubheader component="div">PRODUCTS</ListSubheader>
        </GridListTile>
        {products.map((product) => (
          <GridListTile key={product.id} style={{ height: 'auto'}}>
            <img src={product.thumbnail} alt={product.name}/>
            <GridListTileBar
              title={product.name}
              subtitle={<span>Price: {product.price} $ARS</span>}
              actionIcon={
                <Link to={`/products/${product.id}`}>
                  <IconButton aria-label={`info about ${product.description}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Products