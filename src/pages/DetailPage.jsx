import React from "react";
import styled from "styled-components";
import DetailContent from "../components/DetailContent";
import PrevNextPost from "../components/PrevNextPost";
import Back from "../components/Back";

const DetailPage = () => {
  return (
    <SBodyDiv>
      <Back />
      <DetailContent />
      <PrevNextPost />
    </SBodyDiv>
  );
};

export default DetailPage;

const SBodyDiv = styled.div`
  background-color: #d9d9d9;
  width: 90%;
  height: auto;
  margin: 30px auto 0px auto;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px #cbcbcb;
  font-family: "Lato", "Noto Sans KR", sans-serif;
`;
