import React from "react";
import {Link} from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  buttonDelete: {
    marginLeft: "25px",
    "&:hover": {
      cursor: "pointer",
      color: "red",
    },
  },
  quantity: {
    margin: "11px",
  },
});

const Cart = ({increaseQuantity, decreaseQuantity, products, handleDelete, ammount}) => {
  const classes = useStyles();
  let subtotal = 0;
  let formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  return (
    <div >
      <main>
        <section>
          <div className="banner-innerpage">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 align-self-center text-center">
                  <h1 className="title">Cart Listing</h1>
                  <h6 className="subtitle op-8">
                    We are small team (5mitear) of creative people working together
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="spacer">
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-9">
                  <div className="row shop-listing">
                    <table className="table shop-table">
                      <tbody>
                        <tr>
                          <th className="b-0">Photo</th>
                          <th className="b-0">Name</th>
                          <th className="b-0">Price</th>
                          <th className="b-0">Quantity</th>
                          <th className="b-0 text-center">Total Price</th>
                          <th className="b-0"></th>
                        </tr>
                        {products.map((item, i) => {
                          subtotal += (item.price*item.order_product.quantity)
                          return(
                          <tr key={i}>
                            <td>{item.thumbnail}</td>
                            <td>{item.name}</td>
                            <td>{formatter.format(item.price)}</td>
                            <td>
                              <button
                                onClick={() => decreaseQuantity(item)}
                                className="btn btn-primary btn-sm"
                              >
                                -
                            </button>
                              <span className={classes.quantity}>{item.order_product.quantity}</span>
                              <button
                                onClick={() => increaseQuantity(item)}
                                className="btn btn-primary btn-sm"
                              >
                                +
                            </button>
                            </td>
                            <td className="text-center">
                              <h5 className="font-medium m-b-30">{`${(formatter.format(item.price * item.order_product.quantity))}`}</h5>
                            </td>
                            <td> {/*TODO:hacer que se elimine un producto al hacer click en el tachito. Ya se elimina al llegar a 0 la cantidad de un producto*/}
                              <DeleteIcon 
                                className={classes.buttonDelete}
                                onClick={() => handleDelete(item)}
                              />
                            </td>
                          </tr>
                        )})}
                        <tr>
                          <td colSpan="3" align="right">
                            Subtotal :{formatter.format(subtotal)}
                          </td>
                          <td colSpan="4" align="right">
                            <Link to="/orders">
                              <button className="btn btn-primary">
                                Proceed to checkout
                            </button>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Cart;