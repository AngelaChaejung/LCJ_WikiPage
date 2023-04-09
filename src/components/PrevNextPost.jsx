import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PrevNextPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [prevContent, setPrevContent] = useState(prev?.content);
  const [nextContent, setNextContent] = useState(next?.content);

  useEffect(() => {
    if (prev?.content.length > 50) {
      setPrevContent(prev.content.slice(0, 50) + "...");
    } else {
      setPrevContent(prev?.content);
    }
    if (next?.content.length > 50) {
      setNextContent(next.content.slice(0, 50) + "...");
    } else {
      setNextContent(next?.content);
    }
  }, [prev, next]);

  //이전,다음글 정보 가져오기
  const getPrevData = async () => {
    const { data } = await axios.get(`http://localhost:3001/post/${id - 1}`);
    setPrev(data);
  };
  const getNextData = async () => {
    const { data } = await axios.get(`http://localhost:3001/post/${id * 1 + 1}`);
    setNext(data);
  };
  useEffect(() => {
    getPrevData();
    getNextData();
  }, [id]);
  console.log(prev);
  return (
    <SPrevNexCard>
      <SPrevPost>
        <SPrevNextdiv>
          이전 글 <br />
        </SPrevNextdiv>
        {prev && <STitle onClick={() => navigate(`/detail/${prev.id}`)}>{prev.title}</STitle>}
        {!prev && <SContent>이전 글이 없습니다.</SContent>}
        <br />
        <SContent>
          <ReactMarkdown plugins={[remarkGfm]}>{prevContent}</ReactMarkdown>
        </SContent>
      </SPrevPost>
      <SNextPost>
        <SPrevNextdiv>
          다음 글 <br />
        </SPrevNextdiv>
        {next && <STitle onClick={() => navigate(`/detail/${next?.id}`)}>{next?.title}</STitle>}
        {!next && <SContent>다음 글이 없습니다.</SContent>}
        <br />
        <SContent>
          <ReactMarkdown plugins={[remarkGfm]}>{nextContent}</ReactMarkdown>
        </SContent>
      </SNextPost>
    </SPrevNexCard>
  );
};

export default PrevNextPost;
const SPrevNexCard = styled.div`
  width: 95%;
  height: auto;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 5px;
  color: #505050;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const SPrevPost = styled.div`
  border-bottom: solid #838383 1px;
  padding-bottom: 10px;
`;
const SNextPost = styled.div`
  padding-top: 10px;
`;
const SPrevNextdiv = styled.div`
  font-weight: 500;
  color: #101b2d;
  margin-bottom: 15px;
`;
const STitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  margin: 30px;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;
const SContent = styled.div`
  font-size: 15px;
  color: #838383;
  margin: 10px 30px 20px 30px;
`;
