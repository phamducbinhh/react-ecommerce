import React from "react";
import { useNavigate } from "react-router-dom";
import ActionDelete from "../Components/ActionDelete";
import ActionView from "../Components/ActionView";
import Swal from "sweetalert2";
import axios from "axios";
import { useStore } from "../Context/Store-Context";
import { toast } from "react-toastify";

const TableOrderList = ({ orders, dispatch }) => {
  const navigate = useNavigate();
  const { state } = useStore();
  const { userInfo } = state;

  //hàm delete order list
  const deleteOrder = async (order) => {
    //thu vien confirm deletedc
    Swal.fire({
      text: "Bạn muốn xóa phần nầy!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác Nhận",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //xoa orders trong api
        try {
          dispatch({ type: "DELETE_REQUEST" });
          //Method Deleted để xóa
          await axios.delete(`/api/orders/${order._id}`, {
            //mô tả Bearer Token cấp quyền truy cập cho người dùng khi có token hợp lệ.
            headers: { Authorization: `Bearer ${userInfo.token}` },
          });
          dispatch({ type: "DELETE_SUCCESS" });
        } catch (err) {
          toast.error(err.message, {
            pauseOnHover: false,
            delay: 0,
          });
          dispatch({ type: "DELETE_FAILURE" });
        }
        Swal.fire("Deleted!", "Xóa Thành Công.", "success");
      }
    });
  };
  return (
    <table className="rwd-table">
      <tbody>
        <tr>
          <th>MÃ ĐƠN</th>
          <th>KHÁCH HÀNG</th>
          <th>NGÀY ĐẶT</th>
          <th>TỔNG CỘNG</th>
          <th>THANH TOÁN</th>
          <th>GIAO HÀNG</th>
          <th>CHỈNH SỬA</th>
        </tr>
        {/* map data */}
        {orders.map((order) => (
          <tr key={order._id}>
            <td data-th="mã đơn">{order._id}</td>
            <td data-th="khách hàng">{order.user ? order.user.name : "DELETED USER"}</td>
            <td data-th="ngày đặt">{order.createdAt.substring(0, 10)}</td>
            <td data-th="tổng cộng">{order.totalPrice.toFixed(2)}</td>
            <td data-th="thanh toán">{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
            <td data-th="giao hàng">
              {order.isDelivered ? order.deliveredAt.substring(0, 10) : "No"}
            </td>
            <td data-th="chỉnh sửa">
              <div className="flex items-center justify-center gap-x-3">
                <ActionView
                  onClick={() => {
                    navigate(`/order/${order._id}`);
                  }}
                />
                <ActionDelete onClick={() => deleteOrder(order)} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOrderList;
