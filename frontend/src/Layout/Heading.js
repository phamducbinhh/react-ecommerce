import React from "react";
import styled from "styled-components";
const HeadingStyles = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 55px;
  color: var(--clr-primary-5);
  @media only screen and (max-width: 740px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
