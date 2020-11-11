import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import PinDropIcon from '@material-ui/icons/PinDrop';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DoneAllIcon from '@material-ui/icons/DoneAll';


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
  infoDivs: {
    margin: '1.5rem'
  },
  title: {
    margin: '1.5rem',
    fontSize: '1.5rem'
  }
}));

const ReviewOrder = ({ handleClick, order, products, email, cardNumber }) => {
  const classes = useStyles();
  const lastNumbers = 'XXXX XXXX XXXX ' + cardNumber.slice(15, 19)
  return (
    <div>
      <div className={classes.title}> REVISA TU COMPRA <DoneAllIcon /></div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Productos</TableCell>
              <TableCell align="center">Precio Unitario</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">SubTotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell align="center" component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.order_product.quantity}</TableCell>
                <TableCell align="center">
                  {product.price * product.order_product.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.infoDivs}>Total de tu Orden: {order.ammount} <AttachMoneyIcon /> </div>
      <div className={classes.infoDivs}>Vamos a enviar tu compra a: {order.address} <PinDropIcon /> </div>
      <div className={classes.infoDivs}>Metodo de pago: {lastNumbers} <CreditCardIcon /> </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleClick}
      > Confirmar compra </Button>
    </div>
  );
};

export default ReviewOrder;
