import Axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import Button from "../Components/button/Button";
import Field from "../Components/field/Field";
import Input from "../Components/input/Input";
import Label from "../Components/label/Label";
import { useStore } from "../Context/Store-Context";
import Heading from "../Layout/Heading";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .form {
    max-width: 800px;
    margin: 50px auto;
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
      //để lưu dữ liệu, bạn cần gửi request lên server với method POST
      const { data } = await Axios.post("/api/users/signup", {
        //tương tự setName(e.target.name)
        name: values.name,
        email: values.email,
        password: values.password,
      });
      // thực hiện hành động tương tự setState(result.data)
      dispatch({ type: "USER_SIGNIN", payload: data });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đăng Nhập Thành Công",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      toast.error(err.message, {
        pauseOnHover: false,
        delay: 0,
      });
      Swal.fire("Failed", "Login Failed", "warning");
    }
  };

  return (
    <Wrapper>
      <Heading>Đăng Ký Tài Khoản</Heading>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-layout">
          <Field>
            <Label htmlFor="name">Tên</Label>
            <Input
              name="name"
              type="text"
              placeholder="Nhập Tên"
              required
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Nhập Email"
              required
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="password">Mật Khẩu</Label>
            <Input
              name="password"
              type="password"
              placeholder="Nhập Mật Khẩu"
              control={control}
              required
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="confirmPassword">Xác Nhận Mật Khẩu</Label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Nhập Lại Mật Khẩu"
              required
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="flex justify-between w-full mx-auto">
          <div className="mb-4 font-semibold text-gray-800">
            Bạn Đã Có Tài Khoản?{" "}
            <NavLink to={"/signin"} className="font-bold text-primary">
              Đăng Nhập
            </NavLink>{" "}
          </div>
          <Button
            type="submit"
            kind="ship"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Đăng Ký
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SignUpScreen;
