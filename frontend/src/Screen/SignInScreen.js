import React from "react";
import styled from "styled-components";
import Field from "../Components/field/Field";
import Input from "../Components/input/Input";
import Label from "../Components/label/Label";
import { useForm } from "react-hook-form";
import Button from "../Components/button/Button";
import PageHero from "../Components/PageHero";
import Axios from "axios";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .form {
    max-width: 600px;
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
  const { control, handleSubmit } = useForm();
  // const { search } = useLocation();
  // const redirectInUrl = new URLSearchParams(search).get("redirect");
  // const redirect = redirectInUrl ? redirectInUrl : "/";

  //hàm xác thực tài khoản
  const handleSubmitForm = async (values) => {
    try {
      const { data } = await Axios.post("/api/users/signin", {
        email: values.email,
        password: values.password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <PageHero title={"Sign In"} />
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
            placeholder="Enter your Password"
            control={control}
          ></Input>
        </Field>
        <Button type="submit" kind="ghost">
          Login
        </Button>
      </form>
    </Wrapper>
  );
};

export default SignInScreen;
