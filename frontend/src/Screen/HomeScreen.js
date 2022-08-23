import React from "react";
import styled from "styled-components";

import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import ProductFeauture from "../Components/Product/ProductFeauture";
import Services from "../Components/Services";

const HomeScreenStyles = styled.div``;

const HomeScreen = () => {
  return (
    <HomeScreenStyles>
      <main>
        <Banner />
        <ProductFeauture />
        <Services />
        <Contact />
      </main>
    </HomeScreenStyles>
  );
};

export default HomeScreen;
