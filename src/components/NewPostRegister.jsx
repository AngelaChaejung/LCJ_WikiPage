import React from "react";
import styled from "styled-components";
import GrayButton from "./GrayButton";

const NewPostRegister = () => {
  return (
    <>
      <form>
        <SNewPostCard>
          <STitleBox>
            <STitleInput placeholder="제목을 입력해주세요." />
          </STitleBox>
          <SContent placeholder="내용을 입력해주세요." maxLength="1000" />
        </SNewPostCard>
        <SButtonDiv>
          <GrayButton>완료</GrayButton>
        </SButtonDiv>
      </form>
    </>
  );
};

export default NewPostRegister;
const SNewPostCard = styled.div`
  width: 95%;
  height: auto;
  min-height: 600px;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 5px;
  color: #2d2d2d;
`;
const STitleBox = styled.div`
  flex-direction: row;
  padding: 25px 0 25px 0;
  margin: 20px 20px 0 20px;
  justify-content: space-between;
  display: flex;
  border-bottom: solid 1px #a1a1a1;
`;
const STitleInput = styled.input`
  font-size: 21px;
  border: none;
  width: auto;
  min-width: 100%;
`;
const SContent = styled.textarea`
  font-size: 16px;
  margin: 20px auto;
  height: auto;
  min-height: 478px;
  width: 96%;
  align-items: center;
  display: flex;
  border: none;
  white-space: pre-line;
  word-wrap: break-word;
`;
const SButtonDiv = styled.div`
  padding-left: 30px;
  padding-top: 15px;
`;
