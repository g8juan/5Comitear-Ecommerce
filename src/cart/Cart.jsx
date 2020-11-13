import React from "react";

// STYLES
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from "@material-ui/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  buttonDelete: {
    margin: '0.5rem',
    "&:hover": {
      cursor: "pointer",
      color: "red",
    },
  },
  quantity: {
    margin: "1rem",
  },
  table: {
    minWidth: 650,
  },
  divTable: {
    margin: '3rem'
  },
  title: {
    margin: '1.5rem'
  },
  subtitle: {
    margin: '1.5rem'
  }
});

const Cart = ({ increaseQuantity, decreaseQuantity, products, userId, handleClick }) => {
  const classes = useStyles();
  let subtotal = 0;
  let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div>
      <h3 className={classes.title}>CART <ShoppingCartIcon /></h3>
      <div className={classes.divTable}>
        {products.length > 0 ?
          (<TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell> THUMBNAIL </TableCell> */}
                  <TableCell align="right">Nombre</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products && products.map((product) => {
                  subtotal += (product.price * product.quantity)
                  return (
                    <TableRow key={product.id}>
                      <TableCell align="right">{product.name}</TableCell>
                      <TableCell align="right">{formatter.format(product.price)}</TableCell>
                      <TableCell align="right">
                        <button onClick={() => decreaseQuantity(product)} className="btn btn-dark btn-sm"> - </button>
                        <span className={classes.quantity}>{product.quantity}</span>
                        <button onClick={() => increaseQuantity(product)} className="btn btn-dark btn-sm"> + </button>
                      </TableCell>
                      <TableCell align="right">{`${(formatter.format(product.price * product.quantity))}`}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          ) : (
            <div>
              <Link to={`/products`}>Add products to cart!</Link>
            </div>
          )
        }
      </div>
      <p> Subtotal: {formatter.format(subtotal)} </p>
      {
        userId ? (
          <Link to='/cart/checkout'>
            <button onClick={handleClick} variant="contained" value={subtotal} className="btn btn-secondary">Proceed to delivery details</button>
          </Link>
        ) : (
            <div>
              <p> You need to be loged in to proceed.</p>
              <Link to='/login'>
                <button variant="contained" className="btn btn-secondary">Log in</button>
              </Link>
            </div>
          )
      }
      <hr />
      <Link to='/products'>
        <button className="btn btn-secondary">Back to products</button>
      </Link>
    </div >
  );
};
export default Cart;