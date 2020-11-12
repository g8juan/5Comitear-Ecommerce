import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PinDropIcon from "@material-ui/icons/PinDrop";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DoneAllIcon from "@material-ui/icons/DoneAll";

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
    margin: "1.5rem",
  },
  title: {
    margin: "1.5rem",
    fontSize: "1.5rem",
  },
}));

const SingleOrder = ({ singleOrder }) => {
  console.log(singleOrder, "singleOrder");
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.title}>
        TU ORDEN #{singleOrder.id} <DoneAllIcon />
      </div>
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
            {singleOrder && singleOrder.products.map((product) => (
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
      <div className={classes.infoDivs}>
        El total de tu Orden fue: {singleOrder.ammount} <AttachMoneyIcon />
      </div>
      <div className={classes.infoDivs}>
        Tu compra fue enviada a: {singleOrder.address} <PinDropIcon />
      </div>
    </div>
  );
};

export default SingleOrder;
