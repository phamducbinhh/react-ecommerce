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
    <table className="section-center">
      <thead className="thead">
        <tr>
          <th>ID</th>
          <th>TÊN</th>
          <th>EMAIL</th>
          <th>VAI TRÒ</th>
          <th>CHỈNH SỬA</th>
        </tr>
      </thead>
      <tbody>
        {/* map data */}
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user._id.slice(0, 5)}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin ? "Admin" : "User"}</td>
            <td>
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
