import React from "react";
import styled from "styled-components";
import logo from "../img/header/gk_logo 1.svg";
import whiteNavySqare from "../img/header/hd_bg01 1.svg";
import whiteSquare from "../img/header/Rectangle 25.svg";

const Header = () => {
  return (
    <SWhole>
      <SCenter>
        <SLogo src={logo} alt="logo" />
        <SUnderLogo src={whiteSquare} alt="whiteSquare" />
        <img src={whiteNavySqare} alt="whiteNavySqare" />
      </SCenter>
    </SWhole>
  );
};

export default Header;

const SWhole = styled.div`
  /* width: 939px; */
  width: 100%;
  position: relative;
  height: 127px;
  background-color: #13253b;
`;
const SCenter = styled.div`
  width: 939px;
  height: 127px;
  margin: auto;
`;
const SLogo = styled.img`
  z-index: 150;
  position: absolute;
  padding-left: 68px;
  padding-top: 23px;
`;
const SUnderLogo = styled.img`
  z-index: 100;
`;
