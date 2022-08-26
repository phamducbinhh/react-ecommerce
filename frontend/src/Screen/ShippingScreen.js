import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/button/Button";
import CheckOutStep from "../Components/Checkout/CheckOutStep";
import Field from "../Components/field/Field";
import Input from "../Components/input/Input";
import Label from "../Components/label/Label";
import PageHero from "../Components/PageHero";
import { useStore } from "../Context/Store-Context";
const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
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
const ShippingScreen = () => {
  const { state, dispatch } = useStore();
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  //hàm xác nhận shippingScreen

  const handleSubmitShipping = async (values) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      //chính là action.payload bên trong components reducer
      payload: {
        fullName: values.fullname,
        address: values.address,
        city: values.city,
        postalCode: values.postalCode,
        country: values.country,
      },
    });
    navigate("/payment");
  };

  //chưa đăng nhập sẽ không vào trang shippingscreen
  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    }
  }, [userInfo, navigate]);
  return (
    <Wrapper className="section">
      <PageHero title={"shipping"} />
      {/* tiến trình  */}
      <CheckOutStep step1 step2 />
      <form
        className="form"
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitShipping)}
      >
        <Field>
          <Label htmlFor="fullname">FullName</Label>
          <Input
            name="fullname"
            type="text"
            placeholder="Enter your fullname"
            required
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="address">Address</Label>
          <Input
            name="address"
            type="text"
            placeholder="Enter your address"
            control={control}
            required
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="city">City</Label>
          <Input
            name="city"
            type="text"
            placeholder="Enter your City"
            control={control}
            required
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input
            name="postalCode"
            type="text"
            placeholder="Enter your Postal Code"
            control={control}
            required
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="country">Country</Label>
          <Input
            name="country"
            type="text"
            placeholder="Enter your Country"
            control={control}
            required
          ></Input>
        </Field>
        <Button
          type="submit"
          kind="ghost"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Continue
        </Button>
      </form>
    </Wrapper>
  );
};

export default ShippingScreen;
