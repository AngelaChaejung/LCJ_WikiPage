import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import styled from "styled-components";

function DetailContent() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [titleArr, setTitleArr] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`http://localhost:3001/post/${id}`);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchWholeData() {
      try {
        const { data } = await axios.get("http://localhost:3001/post");
        const titles = data?.map((post) => post.title);
        setTitleArr(titles);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
    fetchWholeData();
  }, [id]);

  function convertTitle(title, index) {
    const converted = `[${title}](/detail/${index + 1})`;
    return converted;
  }

  function isTitleIncluded(titleArr, content) {
    let modifiedContent = content;
    titleArr?.forEach((title, index) => {
      const isContained = content?.includes(title);
      if (isContained) {
        modifiedContent = modifiedContent.replace(title, convertTitle(title, index));
      }
    });
    return modifiedContent;
  }

  return (
    <>
      <SDetailCard>
        <STitleBox>
          <STitle>
            <h4>{post?.title}</h4>
          </STitle>
        </STitleBox>
        <SDate>
          {post?.date} <SEditButton onClick={() => navigate(`/editpost/${id}`)}> 수정하기</SEditButton>
        </SDate>
        <SContent>
          <ReactMarkdown plugins={[remarkGfm, remarkSlug]}>{isTitleIncluded(titleArr, post?.content)}</ReactMarkdown>
        </SContent>
      </SDetailCard>
    </>
  );
}

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
