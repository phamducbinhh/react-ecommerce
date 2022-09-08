import axios from "axios";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ActionDelete from "../Components/ActionDelete";
import ActionEdit from "../Components/ActionEdit";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import { useStore } from "../Context/Store-Context";
import { toast } from "react-toastify";
import LoadingBox from "../Components/Loading/LoadingBox";

const TableProduct = ({
  loading,
  error,
  products,
  loadingDelete,
  dispatch,
}) => {
  const navigate = useNavigate();
  const { state } = useStore();
  const { userInfo } = state;

  //hàm xóa product
  const deleteHandler = async (product) => {
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
        //xoa truong user trong api
        try {
          dispatch({ type: "DELETE_REQUEST" });
          //METHOD DELETE API để xóa
          await axios.delete(`/api/products/${product._id}`, {
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
    <Fragment>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>ảnh</th>
            <th>tên</th>
            <th>giá</th>
            <th>danh mục</th>
            <th>nhãn hiệu</th>
            <th>chỉnh sửa</th>
          </tr>
          {!loading &&
            !error &&
            products?.map((product) => (
              <tr key={product._id}>
                <td data-th="ảnh">
                  <div className="max-w-[300px] h-[70px] overflow-hidden flex justify-center items-center mb-2">
                    <img
                      src={product.image}
                      alt=""
                      className="object-cover w-[100px] h-full rounded-lg"
                    />
                  </div>
                </td>
                <td data-th="tên">{product.name}</td>
                <td data-th="giá">{product.price}</td>
                <td data-th="danh mục">{product.category}</td>
                <td data-th="nhãn hiệu">{product.brand}</td>
                <td data-th="chỉnh sửa">
                  <div className="flex items-center justify-center gap-x-3">
                    <ActionEdit
                      onClick={() => navigate(`/admin/product/${product._id}`)}
                    />
                    <ActionDelete onClick={() => deleteHandler(product)} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {loading && <Loading />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
    </Fragment>
  );
};

export default TableProduct;
