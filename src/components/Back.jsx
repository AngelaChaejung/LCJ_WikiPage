import React from "react";
import backIcon from "../img/backIcon/backIcon.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SBackIcon
        src={backIcon}
        alt="back"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default Back;
const SBackIcon = styled.img`
  margin-top: 30px;
  margin-left: 20px;
  cursor: pointer;
`;
