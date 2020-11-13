import React from "react";
import { Table } from "react-bootstrap";

const AdminOrders = ({ orders, users }) => {
  console.log("orders", orders, users);
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User Email</th>
            <th>Ammount</th>
            <th>Address</th>
            <th>Order Status</th>
            <th>Created At </th>
            <th>Updated At</th>
          </tr>
        </thead>

        {orders &&
          orders.map((order) => {
            return (
              <tbody key={order.id}>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.userEmail}</td>
                  <td>{order.ammount}</td>
                  <td>{order.address}</td>
                  <td>{order.orderStatus}</td>
                  <td>
                    {new Date(order.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td>
                    {new Date(order.updatedAt).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
};
export default AdminOrders;
