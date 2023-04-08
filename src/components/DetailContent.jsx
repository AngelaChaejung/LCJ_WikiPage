import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3001/post/${id}`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, [id]);
  console.log(data);

  return (
    <>
      <SDetailCard>
        <STitleBox>
          <STitle>{data?.title}</STitle>
        </STitleBox>
        <SDate>
          {data?.date} <SEditButton onClick={() => navigate(`/editpost/${id}`)}> 수정하기</SEditButton>
        </SDate>
        <SContent>{data?.content}</SContent>
      </SDetailCard>
    </>
  );
};

export default DetailContent;

const SDetailCard = styled.div`
  width: 95%;
  height: auto;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 5px;
  color: #2d2d2d;
`;
const STitleBox = styled.div`
  flex-direction: row;
  padding-top: 25px;
  padding-left: 20px;
  justify-content: space-between;
  display: flex;
`;
const STitle = styled.span`
  font-size: 21px;
`;
const SContent = styled.div`
  font-size: 16px;
  padding: 20px 20px;
`;
const SDate = styled.div`
  font-size: 13px;
  color: #a1a1a1;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: solid 1px #a1a1a1;
  flex-direction: row;
  display: flex;
`;

const SEditButton = styled.div`
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    color: gray;
    font-weight: 500;
  }
`;
