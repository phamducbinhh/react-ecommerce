import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { useStore } from "../Context/Store-Context";
import { useNavigate, useParams } from "react-router-dom";
import { initialState, reducer } from "../Reducer/reducerProductUpdate";
import Button from "../Components/button/Button";
import { getError } from "../Util/constanst";
import axios from "axios";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 55px;
    color: var(--clr-primary-3);
  }
  .form {
    max-width: 700px;
    margin: 50px auto;
  }
  @media only screen and (max-width: 740px) {
    .logo {
      width: 50px;
    }
    .heading {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
`;

const ProductUpdatePage = () => {
  const navigate = useNavigate();
  const params = useParams(); // /product/:id
  const { id: productId } = params; //lấy id tự động react-router-dom
  const { state } = useStore();
  const { userInfo } = state;
  //dùng react-hook-form

  const [{ loading, error, loadingUpload }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  //get api từ backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/products/${productId}`);
        setName(data.name);
        setSlug(data.slug);
        setPrice(data.price);
        setImage(data.image);
        setCategory(data.category);
        setCountInStock(data.countInStock);
        setBrand(data.brand);
        setDescription(data.description);
        dispatch({ type: "FETCH_SUCCESS" });
      } catch (err) {
        console.log(err);
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [productId]);

  //update products
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      //sử dụng method put để cập nhật lại api
      await axios.put(
        `/api/products/${productId}`,
        {
          _id: productId,
          name,
          slug,
          price,
          image,
          category,
          brand,
          countInStock,
          description,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Update success",
        showConfirmButton: false,
        timer: 1500,
      });
      //setState
      dispatch({ type: "UPDATE_SUCCESS" });
      navigate("/admin/products");
    } catch (err) {
      Swal.fire("Failed", "error", "warning", getError(err));
      dispatch({
        type: "UPDATE_FAIL",
      });
    }
  };

  //upload image
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      const { data } = await axios.post("/api/upload", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: "UPLOAD_SUCCESS" });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Upload Image success",
        showConfirmButton: false,
        timer: 1500,
      });
      //secure_url từ CloudDicnary
      setImage(data.secure_url);
    } catch (err) {
      alert(getError(err));
      dispatch({ type: "UPLOAD_FAIL", payload: getError(err) });
    }
  };
  return (
    <Wrapper className="section">
      <h1 className="heading">Update Product</h1>
      {loading && <Loading />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <form className="form" autoComplete="off" onSubmit={handleUpdateProduct}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="slug">
          <Form.Label>Slug</Form.Label>
          <Form.Control
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image File</Form.Label>
          <Form.Control
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imageFile">
          <Form.Label>Upload File</Form.Label>
          <Form.Control type="file" onChange={uploadFileHandler} />
          {loadingUpload && <Loading></Loading>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="countInStock">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" kind="ghost">
          Update Product
        </Button>
      </form>
    </Wrapper>
  );
};

export default ProductUpdatePage;
