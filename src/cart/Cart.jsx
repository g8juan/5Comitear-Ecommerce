import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/styles";

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

const Cart = ({ increaseQty, decreaseQty, products, payload, handleDelete }) => {
  const classes = useStyles();
  return (
    <div>
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
                      <tr>
                        <th className="b-0">Photo</th>
                        <th className="b-0">Name</th>
                        <th className="b-0">Price</th>
                        <th className="b-0">Quantity</th>
                        <th className="b-0 text-center">Total Price</th>
                        <th className="b-0"></th>
                      </tr>
                      {products.map((item, i) => (
                        <tr>
                          <td>{item.thumbnail}</td>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>
                            <button
                              onClick={() => decreaseQty(item)}
                              className="btn btn-primary btn-sm"
                            >
                              -
                            </button>
                            <span className={classes.quantity}>{item.quantity}</span>
                            <button
                              onClick={() => increaseQty(item)}
                              className="btn btn-primary btn-sm"
                            >
                              +
                            </button>
                          </td>
                          <td className="text-center">
                            <h5 className="font-medium m-b-30">{item.price}</h5>
                          </td>
                          <td>
                            <DeleteIcon
                              className={classes.buttonDelete}
                              onClick={() => handleDelete(item)}
                            />
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colspan="3" align="right">
                          Subtotal :{payload.subTotal}
                        </td>
                        <td colspan="4" align="right">
                          <Link to="/orders">
                            <button className="btn btn-primary">
                              Proceed to checkout
                            </button>
                          </Link>
                        </td>
                      </tr>
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

{
  /* <button onClick={() => handleDelete(product.id)}>Eliminar</button> */
}
