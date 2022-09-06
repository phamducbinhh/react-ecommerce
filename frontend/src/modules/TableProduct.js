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
  successDelete,
  dispatch,
}) => {
  const navigate = useNavigate();
  const { state } = useStore();
  const { userInfo } = state;

  //hàm xóa product
  const deleteHandler = async (product) => {
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <Fragment>
      <table className="section-center">
        <thead className="thead">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAN</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* map data */}
          {!loading &&
            !error &&
            products?.map((product) => (
              <tr key={product._id}>
                <td>{product._id.slice(0, 10)}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <div className="flex items-center gap-x-3">
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
