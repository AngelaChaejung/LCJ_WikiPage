import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkAutolinkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";

const DetailContent = () => {
  const something = null;
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [content, setContent] = useState(null);
  const [titleArr, setTitleArr] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3001/post/${id}`);
    setData(data);
    setContent(data?.content);
  };

  const getWholeData = async () => {
    const { data } = await axios.get(`http://localhost:3001/post`);
    const a = data?.map((e) => e.title);
    setTitleArr(a);
  };

  useEffect(() => {
    getData();

    getWholeData();
  }, [id]);
  console.log(isTitleIncluded(titleArr, content));
  console.log("contentStr", content);
  console.log("titleArr", titleArr);

  function convert(str) {
    return "[" + str + "]" + "(" + something + ")";
  }

  function isTitleIncluded(titleArr, content) {
    for (let i = 0; i < titleArr?.length; i++) {
      if (content?.includes(titleArr[i])) {
        return convert(titleArr[i]);
      }
    }
    return false;
  }

  return (
    <>
      <SDetailCard>
        <STitleBox>
          <STitle>
            <h4>{data?.title}</h4>
          </STitle>
        </STitleBox>
        <SDate>
          {data?.date} <SEditButton onClick={() => navigate(`/editpost/${id}`)}> 수정하기</SEditButton>
        </SDate>
        <SContent>
          <ReactMarkdown plugins={[remarkGfm, remarkSlug, [remarkAutolinkHeadings, { behavior: "wrap" }]]}>
            {data?.content}
          </ReactMarkdown>
        </SContent>
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
const STitle = styled.h2`
  font-size: 21px;
`;
const SContent = styled.div`
  font-size: 16px;
  padding: 30px;
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
