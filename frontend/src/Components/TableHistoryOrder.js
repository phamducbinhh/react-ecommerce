import React from "react";
import { useNavigate } from "react-router-dom";
import ActionView from "./ActionView";

const TableHistoryOrder = ({ order }) => {
  const navigate = useNavigate();
  return (
    <table className="rwd-table">
      <tbody>
        <tr>
          <th>MÃ ĐƠN</th>
          <th>NGÀY ĐẶT</th>
          <th>TỔNG CỘNG</th>
          <th>THANH TOÁN</th>
          <th>GIAO HÀNG</th>
          <th>CHỈNH SỬA</th>
        </tr>
        {/* map data */}
        {order.length > 0 &&
          order.map((item) => (
            <tr key={item._id} className=" tr">
              <td data-th="mã đơn">{item._id.slice(0, 5)}</td>
              <td data-th="ngày đặt">{item.createdAt.substring(0, 10)}</td>
              <td data-th="tổng cộng">{item.totalPrice.toFixed(2)} $</td>
              <td data-th="thanh toán">
                {item.isPaid ? item.paidAt.substring(0, 10) : "No"}
              </td>
              <td data-th="giao hàng">
                {item.isDelivered ? item.deliveredAt.substring(0, 10) : "No"}
              </td>
              <td data-th="chỉnh sửa">
                <div className="flex items-center justify-center gap-x-3">
                  <ActionView
                    type="button"
                    kind="ship"
                    onClick={() => {
                      navigate(`/order/${item._id}`);
                    }}
                  >
                    Details
                  </ActionView>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableHistoryOrder;
