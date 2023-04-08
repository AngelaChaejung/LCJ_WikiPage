import React from "react";
import styled from "styled-components";

const GrayButton = ({ children }) => {
  return <SButton>{children}</SButton>;
};

export default GrayButton;
const SButton = styled.div`
  background-color: transparent;
  width: 110px;
  height: 46px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  justify-content: center;
  background-color: #404040;
  color: #fff;
  align-items: center;
  display: flex;
  margin-top: auto;
  &:hover {
    background-color: #2b2b2b;
    color: #fff;
  }
`;
