import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "10px 60px 10px 20px" : "10px")};
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
    outline: none;
  }
  input:focus {
    background-color: white;
    border-color: var(--clr-primary-1);
  }
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  @media only screen and (max-width: 740px) {
    input {
      padding: 12px;
    }
    input::-webkit-input-placeholder {
      font-size: 12px;
    }
    input::-moz-input-placeholder {
      color: #84878b;
    }
  }
`;
const Input = ({
  name = "",
  type = "text",
  children,
  value,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyles>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.any,
  control: PropTypes.any.isRequired,
};

export default Input;
