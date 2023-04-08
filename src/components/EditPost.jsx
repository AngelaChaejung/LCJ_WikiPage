import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GrayButton from "./GrayButton";

const EditPost = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getData = async () => {
    const { data: receivedData } = await axios.get(`http://localhost:3001/post/${id}`);
    setData(receivedData);
    setTitle(receivedData.title);
    setContent(receivedData.content);
  };

  useEffect(() => {
    getData();
  }, []);

  const editedPost = {
    title,
    content,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title && content) {
      axios
        .patch(`http://localhost:3001/post/${id}`, editedPost)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      //모달띄우기
    }
  };
  return (
    <div>
      <SNewPostCard>
        <STitleBox>
          <STitleInput
            placeholder="수정하실 제목을 입력해주세요."
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </STitleBox>
        <SContent
          placeholder="수정하실 내용을 입력해주세요."
          maxLength="1000"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </SNewPostCard>
      <SButtonDiv onClick={onSubmitHandler}>
        <GrayButton>저장하기</GrayButton>
      </SButtonDiv>
    </div>
  );
};

export default EditPost;
const SNewPostCard = styled.div`
  width: 95%;
  height: auto;
  min-height: 600px;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 5px;
  color: #2d2d2d;
`;
const STitleBox = styled.div`
  flex-direction: row;
  padding: 25px 0 25px 0;
  margin: 20px 20px 0 20px;
  justify-content: space-between;
  display: flex;
  border-bottom: solid 1px #a1a1a1;
`;
const STitleInput = styled.input`
  font-size: 21px;
  border: none;
  width: auto;
  min-width: 100%;
`;
const SContent = styled.textarea`
  font-size: 16px;
  margin: 20px auto;
  height: auto;
  min-height: 478px;
  width: 96%;
  align-items: center;
  display: flex;
  border: none;
  white-space: pre-line;
  word-wrap: break-word;
`;
const SButtonDiv = styled.div`
  padding-left: 30px;
  padding-top: 15px;
`;
