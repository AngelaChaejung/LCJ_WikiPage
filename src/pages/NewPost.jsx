import React from "react";
import NewPostRegister from "../components/NewPostRegister";
import styled from "styled-components";
import Back from "../components/Back";

const NewPost = () => {
  return (
    <SBodyDiv>
      <SBack>
        <Back />
      </SBack>
      <NewPostRegister />
    </SBodyDiv>
  );
};

export default NewPost;
const SBodyDiv = styled.div`
  width: 90%;
  height: auto;
  min-height: 800px;
  margin: 30px auto 0px auto;
  font-family: "Lato", "Noto Sans KR", sans-serif;
`;
const SBack = styled.div`
  padding-left: 20px;
`;
