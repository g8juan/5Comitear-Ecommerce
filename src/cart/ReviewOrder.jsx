import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
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

const ReviewOrder = ({ handleSubmit, order, products, email }) => {
  const classes = useStyles();
  console.log("order", order);
  console.log("products", products);
  console.log("email", email);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Productos</TableCell>
              <TableCell align="right">Precio Unitario</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">SubTotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.order_product.quantity}</TableCell>
                <TableCell align="right">
                  {product.price * product.order_product.quantity}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="right">Total de tu Orden: {order.ammount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div>Vamos a enviar tu compra a: {order.address}</div>
      <div></div>
    </div>
  );
};

export default ReviewOrder;
