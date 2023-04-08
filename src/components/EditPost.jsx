import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GrayButton from "./GrayButton";
import GeneralModal from "./GeneralModal";

const EditPost = () => {
  const { id } = useParams();

  //자동으로 제목 Inputd으로 포커싱되게하기위한 useRef
  const inputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/post/${id}`);
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    inputRef.current.focus();
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (title && content) {
      try {
        await axios.patch(`http://localhost:3001/post/${id}`, { title, content });
        setCompleteModal(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrorModal(true);
    }
  };
  return (
    <div>
      {errorModal && <GeneralModal setModal={setErrorModal}>제목과 내용을 모두 입력해주세요!</GeneralModal>}
      {completeModal && <GeneralModal setModal={setCompleteModal}>수정이 완료되었습니다!</GeneralModal>}
      <SNewPostCard>
        <STitleBox>
          <STitleInput
            placeholder="수정하실 제목을 입력해주세요."
            ref={inputRef}
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
