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
import Heading from "../Layout/Heading";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .form {
    max-width: 400px;
    margin: 50px auto;
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
      //để lưu dữ liệu, bạn cần gửi request lên server với method POST
      const { data } = await Axios.post("/api/users/signin", {
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
    } catch (error) {
      Swal.fire("Failed", "Login Failed", "warning");
    }
  };

  return (
    <Wrapper>
      <Heading>Đăng Nhập</Heading>
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
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
        <div className="mb-4 font-semibold text-gray-800">
          Chưa Có Tài Khoản?{" "}
          <NavLink to={"/signup"} className="font-bold text-primary">
            Đăng ký
          </NavLink>{" "}
        </div>
        <Button
          type="submit"
          kind="ghost"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Đăng Nhập
        </Button>
      </form>
    </Wrapper>
  );
};

export default SignInScreen;
