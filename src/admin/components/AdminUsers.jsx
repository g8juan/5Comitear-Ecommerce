import React from "react";
import { Table, Button } from "react-bootstrap";

const AdminUsers = ({ users, setAdmin, setUser }) => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>User Type</th>
          </tr>
        </thead>

        {users &&
          users.map((user) => {
            return (
              <tbody key={user.id}>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.userType === "1" ? (
                      <Button
                        onClick={() => {
                          setAdmin(user.id);
                        }}
                      >
                        Set admin
                      </Button>
                    ) : (
                      <Button onClick={() => setUser(user.id)}>Set user</Button>
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
};
export default AdminUsers;
