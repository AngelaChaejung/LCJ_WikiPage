import React from "react";
import styled from "styled-components";
import blog from "../img/socialmedia/blog.png";
import facebook from "../img/socialmedia/facebook.png";
import insta from "../img/socialmedia/insta.png";
import youtube from "../img/socialmedia/youtube.png";
const Footer = () => {
  return (
    <SWhole>
      <SLinkDiv>
        <Sspan onClick={() => (window.location.href = " https://www.gkn.co.kr/sub/sub.php?sub_code=01/01")}>
          회사소개
        </Sspan>
        |
        <Sspan onClick={() => (window.location.href = " https://www.gkn.co.kr/sub/sub.php?sub_code=01/02")}>연혁</Sspan>{" "}
        |
        <Sspan onClick={() => (window.location.href = " https://www.gkn.co.kr/sub/sub.php?sub_code=01/03")}>
          주요사업
        </Sspan>
        |
        <Sspan onClick={() => (window.location.href = "https://www.gkn.co.kr/include/text1.html")}>
          개인정보 취급방침{" "}
        </Sspan>
        |
        <Sspan onClick={() => (window.location.href = " https://www.gkn.co.kr/sub/sub.php?sub_code=01/04")}>
          {" "}
          오시는 길
        </Sspan>{" "}
        | <SIcon src={blog} alt="blog" onClick={() => (window.location.href = "https://blog.naver.com/global783")} />
        <SIcon
          src={facebook}
          alt="facebook"
          onClick={() => (window.location.href = "https://www.facebook.com/gkn.co.kr/?ref=page_internal")}
        />
        <SIcon
          src={insta}
          alt="insta"
          onClick={() => (window.location.href = "https://www.instagram.com/globalknowledge_gkn/?hl=ko")}
        />
        <SIcon
          src={youtube}
          alt="youtube"
          onClick={() => (window.location.href = "https://www.youtube.com/channel/UCx83jMig1QUfL6HTmjC7u7Q/featured")}
        />
      </SLinkDiv>
      <SCopyrightSpan>
        Copyright (c) 2009 Global Knowledge Korea Training LLC All rights reserved. | Legal (한국글로벌널리지㈜) 대표 :
        김동하 사업자등록번호 : 116-81-59687 통신판매업신고번호 : 2018-서울강남-04239
      </SCopyrightSpan>
    </SWhole>
  );
};

export default Footer;

const SWhole = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  bottom: 0;
  height: 184px;
  background-color: #2d2d2d;
  padding: 30px;
  align-items: center;
`;
const SCopyrightSpan = styled.span`
  font-size: 12px;
  color: #fff;
  font-family: "Lato", "Noto Sans KR", sans-serif;
  line-height: 30px;
  text-align: center;
  height: 30px;
  font-weight: 500;
  margin-top: 30px;
  display: flex;
  width: auto;
  margin: 40px auto auto auto;
  justify-content: center;
`;
const SLinkDiv = styled.div`
  color: #fff;
  text-align: center;
  font-weight: 600;
  font-family: "Lato", "Noto Sans KR", sans-serif;
  font-size: 12px;
  justify-content: space-between;
  display: flex;
  width: 630px;
  margin: auto;
  align-items: center;
`;
const SIcon = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  aspect-ratio: auto 60 / 60;
`;
const Sspan = styled.span`
  cursor: pointer;
`;
