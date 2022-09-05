import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ActionDelete from "../Components/ActionDelete";
import ActionEdit from "../Components/ActionEdit";
import Button from "../Components/button/Button";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";

const TableProduct = ({ loading, error, products }) => {
  const navigate = useNavigate();
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
                    <ActionDelete />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading && <Loading />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
    </Fragment>
  );
};

export default TableProduct;
