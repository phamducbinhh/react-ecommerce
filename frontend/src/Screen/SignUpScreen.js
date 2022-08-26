import Axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Button from "../Components/button/Button";
import Field from "../Components/field/Field";
import Input from "../Components/input/Input";
import Label from "../Components/label/Label";
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
    max-width: 800px;
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

const SignUpScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useStore();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  //hàm đăng ký tài khoản
  const handleSignUp = async (values) => {
    //check password === confirmPassword
    if (values.password !== values.confirmPassword) {
      Swal.fire("Failed", "Confirm Password Failed", "warning");
      return;
    }
    try {
      //đăng ký tài khoản gửi lên api bao gồm các thông tin name,email,password
      const { data } = await Axios.post("/api/users/signup", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      // thực hiện hành động tương tự setState(result.data)
      dispatch({ type: "USER_SIGNIN", payload: data });
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire("Failed", "Login Failed", "warning");
    }
  };

  return (
    <Wrapper>
      <h1 className="heading">Sign Up</h1>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-layout">
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
        </div>
        <div className="form-layout">
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
          <Field>
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Enter your Confirm Password"
              control={control}
              required
            ></Input>
          </Field>
        </div>
        <div className="flex justify-between w-full mx-auto">
          <div className="mb-4 font-semibold text-gray-800">
            You had have an account?{" "}
            <NavLink to={"/signin"} className="font-bold text-primary">
              Login
            </NavLink>{" "}
          </div>
          <Button
            type="submit"
            kind="ship"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SignUpScreen;
