import React from "react";
import { Link } from "react-router-dom";

// STYLES
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  buttonDelete: {
    // marginLeft: "25px",
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
    margin: '1rem'
  },
  subtitle: {
    margin: '1rem'
  }
});

const Cart = ({ increaseQuantity, decreaseQuantity, products, handleDelete, handleClick }) => {
  const classes = useStyles();
  let subtotal = 0;
  let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return (
    <div>
      <h3 className={classes.title}>Cart Listing</h3>
      <h6 className={classes.subtitle}> We are small team (5mitear) of creative people working together </h6>
      <div className={classes.divTable}>
        <TableContainer component={Paper}>
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
                subtotal += (product.price * product.order_product.quantity)
                return (
                  <TableRow key={product.id}>
                    {/* <TableCell component="th" scope="row"> {product.thumbnail} </TableCell> */}
                    <TableCell align="right">{product.name}</TableCell>
                    <TableCell align="right">{formatter.format(product.price)}</TableCell>
                    <TableCell align="right">
                      <button onClick={() => decreaseQuantity(product)} className="btn btn-primary btn-sm"> - </button>
                      <span className={classes.quantity}>{product.order_product.quantity}</span>
                      <button onClick={() => increaseQuantity(product)} className="btn btn-primary btn-sm"> + </button>
                    </TableCell>
                    <TableCell align="right">{`${(formatter.format(product.price * product.order_product.quantity))}`}</TableCell>
                    <TableCell align="right">
                      <DeleteIcon className={classes.buttonDelete} onClick={() => handleDelete(product)} />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <p> Subtotal: {formatter.format(subtotal)} </p>
      <Link to="/cart/checkout" style={{ color: 'white' }}>
        <button onClick={handleClick} className="btn btn-primary" value={subtotal}> Proceed to delivery details </button>
      </Link>
      <hr />
      <Link to="/products">
        <button className="btn btn-secondary" value={subtotal}> Back to products </button>
      </Link>
    </div>
  );
};
export default Cart;