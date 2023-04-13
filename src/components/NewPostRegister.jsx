import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GrayButton from "./GrayButton";
import axios from "axios";
import GeneralModal from "./GeneralModal";

const NewPostRegister = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/post").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const today = new Date();
  const date = new Date(+today + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, "").split(" ")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      const newId = posts.length > 0 ? posts[posts.length - 1].id * 1 + 1 : 1;

      const newPost = { title, content, date, id: newId };
      try {
        await axios.post("http://localhost:3001/post", newPost); // 서버에 게시글 추가 요청 후, 응답으로부터 새로 추가된 게시글의 id 값을 받아옴

        setCompleteModal(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorModal(true);
    }
  };

  return (
    <>
      <SNewPostCard>
        {errorModal && <GeneralModal setModal={setErrorModal}>제목과 내용을 모두 입력해주세요!</GeneralModal>}
        {completeModal && <GeneralModal setModal={setCompleteModal}>새로운 위키가 등록되었습니다!</GeneralModal>}
        <STitleBox>
          <STitleInput
            placeholder="제목을 입력해주세요."
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </STitleBox>
        <SContent
          placeholder="내용을 입력해주세요."
          maxLength="1000"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </SNewPostCard>
      <SButtonDiv onClick={handleSubmit}>
        <GrayButton>완료</GrayButton>
      </SButtonDiv>
    </>
  );
};

export default NewPostRegister;
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
  padding: 30px;
`;
const SButtonDiv = styled.div`
  padding-left: 30px;
  padding-top: 15px;
`;
