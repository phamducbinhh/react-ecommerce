import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/button/Button";

const TableOrderList = ({ orders }) => {
  const navigate = useNavigate();
  return (
    <table className="section-center">
      <thead className="thead">
        <tr>
          <th>ID</th>
          <th>USER</th>
          <th>DATE</th>
          <th>TOTAL</th>
          <th>PAID</th>
          <th>DELIVERED</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {/* map data */}
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.user ? order.user.name : "DELETED USER"}</td>
            <td>{order.createdAt.substring(0, 10)}</td>
            <td>{order.totalPrice.toFixed(2)}</td>
            <td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
            <td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
            <td>
              {order.isDelivered ? order.deliveredAt.substring(0, 10) : "No"}
            </td>
            <td>
              <Button
                type="button"
                kind="ship"
                onClick={() => {
                  navigate(`/order/${order._id}`);
                }}
              >
                Details
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOrderList;
