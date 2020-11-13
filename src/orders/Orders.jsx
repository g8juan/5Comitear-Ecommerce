import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Orders = ({ ordersList }) => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Order #</th>
            <th>Ammount</th>
            <th>Delivered at</th>
            <th>Order Status</th>
            <th>Date</th>
          </tr>
        </thead>

        {ordersList.map((order, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>{order.id}</td>
                <td>{order.ammount}</td>
                <td>{order.address}</td>
                <td>{order.orderStatus}</td>
                <td>{new Date(order.updatedAt).toLocaleDateString("en-GB")}</td>
                <td>
                  <Button
                    as={Link}
                    to={{
                      pathname: `/orders/${order.id}`,
                      state: { orderId: order.id },
                    }}
                  >
                    See purchase
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};
export default Orders;
