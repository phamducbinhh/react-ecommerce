import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../Components/button/Button";
import Field from "../Components/field/Field";
import Input from "../Components/input/Input";
import Label from "../Components/label/Label";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import { initialState, reducer } from "../Reducer/reducerProductManage";

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
const ProductAddNew = () => {
  //dùng react-hook-form
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  //reducerProductManage
  const [{ products, loading, error, pages }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <Wrapper className="section">
      <h1 className="heading">Create Product</h1>
      {/* {loading && <Loading />}
      {error && <MessageBox variant="danger">{error}</MessageBox>} */}
      <form className="form" autoComplete="off">
        <div className="form-layout">
          <Field>
            <Label htmlFor="Name">Name</Label>
            <Input
              name="name"
              type="text"
              placeholder="Enter your Name"
              required
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="Slug">Slug</Label>
            <Input
              name="slug"
              type="text"
              placeholder="Enter your Slug"
              control={control}
              required
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="Price">Price</Label>
            <Input
              name="price"
              type="text"
              placeholder="Enter your Price"
              control={control}
              required
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="Image File">Image File</Label>
            <Input
              name="image"
              type="text"
              placeholder="Enter your Image File"
              control={control}
              required
            ></Input>
            {/* choose image */}
            <Input name="file" type="file" control={control} required></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="Category">Category</Label>
            <Input
              name="category"
              type="text"
              placeholder="Enter your Category"
              control={control}
              required
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="Brand">Brand</Label>
            <Input
              name="brand"
              type="text"
              placeholder="Enter your Brand"
              control={control}
              required
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="countInStock">Count In Stock</Label>
            <Input
              name="countInStock"
              type="text"
              placeholder="Enter your Count In Stock"
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
          Create Product
        </Button>
      </form>
    </Wrapper>
  );
};

export default ProductAddNew;
