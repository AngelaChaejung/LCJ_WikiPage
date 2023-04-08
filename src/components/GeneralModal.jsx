import React from "react";
import styled from "styled-components";
import GrayButton from "./GrayButton";
import errorIcon from "../img/errorIcon/errorIcon.svg";
import successIcon from "../img/successIcon/success.svg";
import { useNavigate } from "react-router-dom";

const GeneralModal = ({ children, setModal }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    setModal(false);
    if (children === "제목과 내용을 모두 입력해주세요!") return;
    else {
      navigate("/");
    }
  };
  return (
    <SModalbg>
      <SModalBody>
        <SMessage>
          <SIcon src={children === "제목과 내용을 모두 입력해주세요!" ? errorIcon : successIcon} alt="error" />
          {children}
        </SMessage>
        <SButton onClick={onClickHandler}>
          <GrayButton>닫기</GrayButton>
        </SButton>
      </SModalBody>
    </SModalbg>
  );
};

export default GeneralModal;
const SModalbg = styled.div`
  background-color: #00000037;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const SModalBody = styled.div`
  z-index: 15;
  background-color: white;
  width: 30%;
  display: flex;
  top: 35%;
  left: 35%;
  height: 30%;
  position: fixed;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  flex-direction: column;
`;

const SButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 15px;
`;

const SMessage = styled.span`
  font-size: 20px;
  color: #2d2d2d;
`;
const SIcon = styled.img`
  height: 45px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: auto auto 6px auto;
`;
