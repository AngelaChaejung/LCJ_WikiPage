import styled from "styled-components";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <SOutWrap>
        <Header />
        <SContentBox>{children}</SContentBox>
        <Footer />
      </SOutWrap>
    </>
  );
};

export default Layout;

const SOutWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

const SContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #eeeeee;
  width: 80%;
  margin: 0px auto 0px auto;
`;
