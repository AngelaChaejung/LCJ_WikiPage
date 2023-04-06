import styled from "styled-components";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <SContentBox />
      <Footer />
    </>
  );
};

export default Layout;

const SContentBox = styled.div``;
