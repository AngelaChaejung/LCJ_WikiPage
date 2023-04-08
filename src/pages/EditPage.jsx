import React from "react";
import EditPost from "../components/EditPost";
import styled from "styled-components";
import backIcon from "../img/backIcon/backIcon.svg";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const navigate = useNavigate();
  return (
    <SBodyDiv>
      <SBackIcon
        src={backIcon}
        alt="back"
        onClick={() => {
          navigate(-1);
        }}
      />
      <EditPost />
    </SBodyDiv>
  );
};

export default EditPage;
const SBodyDiv = styled.div`
  width: 90%;
  height: auto;
  min-height: 800px;
  margin: 30px auto 0px auto;
  font-family: "Lato", "Noto Sans KR", sans-serif;
`;

const SBackIcon = styled.img`
  margin-top: 30px;
  margin-left: 20px;
  cursor: pointer;
  padding-left: 20px;
`;
