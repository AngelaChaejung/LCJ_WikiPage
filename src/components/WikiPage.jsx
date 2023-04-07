import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pencil from "../img/newpostIcon/pencil.svg";

const WikiPage = () => {
  const navigate = useNavigate();

  //JSON서버로 데이터를 받아오는 부분
  const [db, setDb] = useState(null);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:3001/post");
    setDb(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <STitleSpan>Global Knowledge Wiki</STitleSpan>
      <SAddPost onClick={() => navigate(`/newpost`)}>
        <SPencilIcon src={pencil} alt="pencil" />
        새로운 wiki 작성하기
      </SAddPost>
      <SListBox>
        <S1stRow>
          <STitle>제목</STitle> <SDate>작성일</SDate>
        </S1stRow>

        {db?.map((a, i) => (
          <SContentContainer key={i}>
            <SContentTitle onClick={() => navigate(`/detail/${a.id}`)}>{a.title}</SContentTitle>{" "}
            <SContentDate>{a.date}</SContentDate>
          </SContentContainer>
        ))}
      </SListBox>
    </div>
  );
};

export default WikiPage;

const SAddPost = styled.div`
  flex-direction: row-reverse;
  display: flex;
  gap: 5px;
  color: #444444;
  font-weight: 600;
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
  padding-left: 28px;
  cursor: pointer;
`;

const SContentDate = styled.div`
  width: 35%;
  text-align: center;
`;
const SPencilIcon = styled.img`
  cursor: pointer;
`;
