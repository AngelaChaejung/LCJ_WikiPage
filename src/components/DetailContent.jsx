import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import kebabButton from "../img/detailkebabIcon/Group.svg";

const DetailContent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3001/post/${id}`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <>
      <SDetailCard>
        <STitleBox>
          <STitle>{data?.title}</STitle>
          <SIcon src={kebabButton} alt="kebabIcon" />
        </STitleBox>
        <SDate>{data?.date}</SDate>
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
`;
const SIcon = styled.img`
  width: 6px;
  margin-right: 25px;
  cursor: pointer;
`;
