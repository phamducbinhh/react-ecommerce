import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button/Button";

const TableHistoryOrder = ({ order }) => {
  const navigate = useNavigate();
  return (
    <table className="section-center">
      <thead className="thead">
        <tr>
          <th>MÃ ĐƠN</th>
          <th>NGÀY ĐẶT</th>
          <th>TỔNG CỘNG</th>
          <th>THANH TOÁN</th>
          <th>GIAO HÀNG</th>
          <th>CHỈNH SỬA</th>
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
                <div className="flex items-center justify-center gap-x-3">
                  <Button
                    type="button"
                    kind="ship"
                    onClick={() => {
                      navigate(`/order/${item._id}`);
                    }}
                  >
                    Details
                  </Button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableHistoryOrder;
