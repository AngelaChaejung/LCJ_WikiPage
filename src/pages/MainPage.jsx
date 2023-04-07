import React from "react";

import styled from "styled-components";

import WikiPage from "../components/WikiPage";

const MainPage = () => {
  return (
    <>
      <SBodyDiv>
        <WikiPage />
      </SBodyDiv>
    </>
  );
};

export default MainPage;

const SBodyDiv = styled.div`
  background-color: #d9d9d9;
  width: 90%;
  height: auto;
  margin: 70px auto 0px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px #cbcbcb;
  font-family: "Lato", "Noto Sans KR", sans-serif;
`;
