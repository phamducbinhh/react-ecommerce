import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ActionDelete from "../Components/ActionDelete";
import ActionView from "../Components/ActionView";
import { useStore } from "../Context/Store-Context";

const TableUserList = ({ users, dispatch }) => {
  const navigate = useNavigate();
  const { state } = useStore();
  const { userInfo } = state;
  //hàm xóa user
  const handleDeleteUser = async (user) => {
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
        //xoa user trong api
        try {
          dispatch({ type: "DELETE_REQUEST" });
          //Method Deleted để xóa
          axios.delete(`/api/users/${user._id}`, {
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
          <th>id</th>
          <th>tên</th>
          <th>email</th>
          <th>vai trò</th>
          <th>chỉnh sửa</th>
        </tr>
        {/* map data */}
        {users.map((user) => (
          <tr key={user._id}>
            <td data-th="id">{user._id.slice(0, 5)}</td>
            <td data-th="tên">{user.name}</td>
            <td data-th="email">{user.email}</td>
            <td data-th="vai trò">{user.isAdmin ? "Admin" : "User"}</td>
            <td data-th="chỉnh sửa">
              <div className="flex items-center justify-center gap-x-3">
                <ActionView
                  onClick={() => navigate(`/admin/user/${user._id}`)}
                />
                <ActionDelete onClick={() => handleDeleteUser(user)} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUserList;
