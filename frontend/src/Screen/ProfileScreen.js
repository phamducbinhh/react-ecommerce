import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../Components/button/Button";
import Field from "../Components/field/Field";
import Input from "../Components/input/Input";
import Label from "../Components/label/Label";
import { useStore } from "../Context/Store-Context";
import { initialState, reducerUpdate } from "../Reducer/reducerUpdate";
import Swal from "sweetalert2";

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
    max-width: 400px;
    margin: 50px auto;
  }
`;
const ProfileScreen = () => {
  const { state, dispatch: ctxDispatch } = useStore();
  const { userInfo } = state;
  console.log(userInfo);

  const [{ loadingUpdate }, dispatch] = useReducer(reducerUpdate, initialState);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting},
  } = useForm({
    defaultValues: {},
  });

  //reset các giá trị values
  useEffect(() => {
    reset({ name: userInfo.name, email: userInfo.email });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //hàm update profile
  const handleUpdateProfile = async (values) => {
    //check password === confirmPassword
    if (values.password !== values.confirmPassword) {
      Swal.fire("Failed", "Confirm Password Failed", "warning");
      return;
    }
    try {
      //update tài khoản với api update được tạo ở backend
      //PUT – Update: Cập nhật dữ liệu
      const { data } = await axios.put(
        "/api/users/profile",
        {
          name: values.name,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      //setState sau khi update sẽ cập nhật thẳng vào api sign in
      dispatch({ type: "UPDATE_SUCCESS" });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "update success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_FAIL",
      });
      Swal.fire("Failed", "Update Failed", "danger");
    }
  };
  return (
    <Wrapper>
      <h1 className="heading">Profile</h1>
      <form className="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="Enter your Name"
            required
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="text"
            placeholder="Enter your Email"
            required
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            placeholder="Enter your Password"
            required
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Enter your Confirm Password"
            required
            control={control}
          ></Input>
        </Field>
        <Button
          type="submit"
          kind="ghost"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Update
        </Button>
      </form>
    </Wrapper>
  );
};

export default ProfileScreen;
