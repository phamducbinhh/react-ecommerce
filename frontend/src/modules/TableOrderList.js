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
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //xoa orders trong api
        try {
          dispatch({ type: "DELETE_REQUEST" });
          //Method Deleted để xóa
          await axios.delete(`/api/orders/${order._id}`, {
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
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
            <td>
              {order.isDelivered ? order.deliveredAt.substring(0, 10) : "No"}
            </td>
            <td>
              <div className="flex items-center gap-x-3">
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
