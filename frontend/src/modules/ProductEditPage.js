import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { useStore } from "../Context/Store-Context";
import { useNavigate, useParams } from "react-router-dom";
import { initialState, reducer } from "../Reducer/reducerProductUpdate";
import Field from "../Components/field/Field";
import Label from "../Components/label/Label";
import Input from "../Components/input/Input";
import { useForm } from "react-hook-form";
import Button from "../Components/button/Button";
import { getError } from "../Util/constanst";
import axios from "axios";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import Swal from "sweetalert2";
import ImageUpload from "../Components/ImageUpload";
import { toast } from "react-toastify";
import Heading from "../Layout/Heading";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .form {
    max-width: 700px;
    margin: 50px auto;
  }
`;

const ProductEditPage = () => {
  const navigate = useNavigate();
  const params = useParams(); // /product/:id
  const { id: productId } = params; //lấy id tự động react-router-dom
  const { state } = useStore();
  const { userInfo } = state;

  const [{ loading, error, loadingUpload }, dispatch] = useReducer(
    reducer,
    initialState
  );
  //dùng react-hook-form
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  //get  api từ backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        // để lấy ra dữ liệu của productsId, bạn cần gửi request lên server với method GET
        const { data } = await axios.get(`/api/products/${productId}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS" });
        setValue("name", data.name);
        setValue("slug", data.slug);
        setValue("price", data.price);
        setValue("category", data.category);
        setValue("brand", data.brand);
        setValue("countInStock", data.countInStock);
        setValue("description", data.description);
        setValue("image", data.image);
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [productId, setValue, userInfo]);

  //update products
  const handleUpdateProduct = async ({
    name,
    slug,
    price,
    image,
    category,
    brand,
    countInStock,
    description,
  }) => {
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      //sử dụng method put để cập nhật lại api
      await axios.put(
        `/api/products/${productId}`,
        {
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
        title: "Update Thành Công",
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
  const uploadFileHandler = async (e, image = "image") => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      //api upload cloudinary
      //POST – Create: Tạo dữ liệu mới
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
        title: "Upload success",
        showConfirmButton: false,
        timer: 1500,
      });
      setValue(image, data.secure_url);
    } catch (err) {
      toast.error(err.message, {
        pauseOnHover: false,
        delay: 0,
      });
      dispatch({ type: "UPLOAD_FAIL", payload: getError(err) });
    }
  };

  return (
    <Wrapper className="section">
      <Heading>Cập Nhật Sản Phẩm</Heading>
      {loading && <Loading />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <form
        className="form"
        autoComplete="off"
        onSubmit={handleSubmit(handleUpdateProduct)}
      >
        <div className="form-layout">
          <Field>
            <Label htmlFor="Name">Tên sản phẩm</Label>
            <Input
              name="name"
              type="text"
              placeholder="Tên sản phẩm"
              required
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="Slug">Đường Dẫn</Label>
            <Input
              name="slug"
              type="text"
              placeholder="Đường Dẫn"
              control={control}
              required
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="Price">Giá (vnđ)</Label>
            <Input
              name="price"
              type="text"
              placeholder="Giá (vnđ)"
              control={control}
              required
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="Image File">Hình ảnh</Label>
            <Input
              name="image"
              type="text"
              placeholder="Hình ảnh"
              control={control}
              required
            ></Input>
            {/* choose image */}
            <ImageUpload onChange={uploadFileHandler} />
            {loadingUpload && <Loading></Loading>}
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="Category">Danh Mục</Label>
            <Input
              name="category"
              type="text"
              placeholder="Danh Mục"
              control={control}
              required
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="Brand">Thương hiệu</Label>
            <Input
              name="brand"
              type="text"
              placeholder="Thương hiệu"
              control={control}
              required
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="countInStock">Số lượng</Label>
            <Input
              name="countInStock"
              type="text"
              placeholder="Số lượng"
              control={control}
              required
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="Description">Description</Label>
            <Input
              name="description"
              type="text"
              placeholder="Enter your Description"
              control={control}
              required
            ></Input>
          </Field>
        </div>
        <Button
          type="submit"
          kind="ghost"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Xác Nhận
        </Button>
      </form>
    </Wrapper>
  );
};

export default ProductEditPage;
