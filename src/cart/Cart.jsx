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
import { Button } from "react-bootstrap";
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
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell> THUMBNAIL </TableCell> */}
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Precio</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products && products.map((product) => {
                subtotal += (product.price * product.quantity)
                return (
                  <TableRow key={product.id}>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{formatter.format(product.price)}</TableCell>
                    <TableCell align="center">
                      <button onClick={() => decreaseQuantity(product)} className="btn btn-primary btn-sm"> - </button>
                      <span className={classes.quantity}>{product.quantity}</span>
                      <button onClick={() => increaseQuantity(product)} className="btn btn-primary btn-sm"> + </button>
                    </TableCell>
                    <TableCell align="center">{`${(formatter.format(product.price * product.quantity))}`}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <p> Subtotal: {formatter.format(subtotal)} </p>
      {userId ? (
        <Button as={Link} to="/cart/checkout" className="m-1" variant="secondary">Proceed to delivery details</Button>
      ) :
        (
          <div>
            <p> You need to login first to go to the check out! </p>
            <Button as={Link} to="/login" className="m-1" variant="secondary">Login</Button>
          </div>
        )
      }
      <hr />
      <Button as={Link} to="/products" className="m-1" variant="secondary">Back to products</Button>
    </div>
  );
};
export default Cart;