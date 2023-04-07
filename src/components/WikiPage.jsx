import React from "react";

import styled from "styled-components";

import axios from "axios";

const WikiPage = () => {
  const objectData = {
    post: [
      { title: "제목1", content: "내용1", date: "2023-04-07" },

      { title: "제목2", content: "내용2", date: "2023-04-05" },
    ],
  };

  return (
    <div>
      <STitleSpan>Wiki Page</STitleSpan>

      <SAddPost>작성하기</SAddPost>

      <SListBox>
        <S1stRow>
          <STitle>제목</STitle> <SDate>작성일</SDate>
        </S1stRow>

        {objectData.post.map((a) => (
          <SContentContainer>
            <SContentTitle>{a.title}</SContentTitle> <SContentDate>{a.date}</SContentDate>
          </SContentContainer>
        ))}
      </SListBox>
    </div>
  );
};

export default WikiPage;

const SAddPost = styled.div`
  flex-direction: row-reverse;

  display: flex; ;
`;

const STitleSpan = styled.span`
  font-size: 30px;

  font-weight: 500;

  color: #101b2d;

  margin-left: 15px;

  text-shadow: 4px 4px 4px #101b2d29;
`;

const SListBox = styled.div`
  width: 100%;

  height: 400px;

  background-color: #fafafa;

  margin-top: 20px;
`;

const S1stRow = styled.span`
  padding: 15px 0px 15px 0px;

  text-shadow: 4px 4px 4px #101b2d29;

  color: #101b2d;

  font-size: 20px;

  display: flex;

  text-align: center;

  border-bottom: solid #d9d9d9 2px;

  font-weight: 500;
`;

const STitle = styled.div`
  width: 65%;

  text-align: center;
`;

const SDate = styled.div`
  width: 35%;

  text-align: center;
`;

const SContentContainer = styled.div`
  display: flex;

  padding: 8px 0px 8px 0px;

  border-bottom: solid #ecececb8 2px;
`;

const SContentTitle = styled.div`
  width: 65%;

  padding-left: 8px;
`;

const SContentDate = styled.div`
  width: 35%;

  text-align: center;
`;
