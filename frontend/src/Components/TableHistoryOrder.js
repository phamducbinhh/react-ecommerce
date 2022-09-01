import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button/Button";

const TableHistoryOrder = ({ order }) => {
  const navigate = useNavigate();
  return (
    <table className="section-center">
      <thead className="thead">
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>TOTAL</th>
          <th>PAID</th>
          <th>DELIVERED</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {/* map data */}
        {order.length > 0 &&
          order.map((item) => (
            <tr key={item._id} className=" tr">
              <td>{item._id.slice(0, 5)}</td>
              <td>{item.createdAt.substring(0, 10)}</td>
              <td>{item.totalPrice.toFixed(2)} $</td>
              <td>{item.isPaid ? item.paidAt.substring(0, 10) : "No"}</td>
              <td>
                {item.isDelivered ? item.deliveredAt.substring(0, 10) : "No"}
              </td>
              <td>
                <Button
                  type="button"
                  kind="ship"
                  onClick={() => {
                    navigate(`/order/${item._id}`);
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

export default TableHistoryOrder;
