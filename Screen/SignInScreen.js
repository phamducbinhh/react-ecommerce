import React from "react";
import styled from "styled-components";
import Field from "../Components/field/Field";
import Input from "../Components/input/Input";
import Label from "../Components/label/Label";
import { useForm } from "react-hook-form";
import Button from "../Components/button/Button";
import Axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useStore } from "../Context/Store-Context";

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
const SignInScreen = () => {
  //lấy thông tin User từ context user là UserStore
  const { dispatch } = useStore();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  //hàm đăng nhập tài khoản bằng api
  const handleSubmitForm = async (values) => {
    try {
      //đăng nhập tài khoản thông tin data trả về từ api chứa các thông tin user,email,password
      const { data } = await Axios.post("/api/users/signin", {
        email: values.email,
        password: values.password,
      });
      // thực hiện hành động tương tự setState(result.data)
      dispatch({ type: "USER_SIGNIN", payload: data });
      navigate("/");
    } catch (error) {
      Swal.fire("Failed", "Login Failed", "warning");
    }
  };

  return (
    <Wrapper>
      <h1 className="heading">Login</h1>
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
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
            control={control}
            required
          ></Input>
        </Field>
        <div className="mb-4 font-semibold text-gray-800">
          You had have an account?{" "}
          <NavLink to={"/signup"} className="font-bold text-primary">
            Sign Up
          </NavLink>{" "}
        </div>
        <Button
          type="submit"
          kind="ghost"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Login
        </Button>
      </form>
    </Wrapper>
  );
};

export default SignInScreen;
