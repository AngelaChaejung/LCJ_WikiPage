import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GrayButton from "./GrayButton";
import axios from "axios";

const NewPostRegister = () => {
  //렌더링이되면 새로 생성되는 게시글의 id를 기존 data의 마지막 아이디+1로 만들기 위해 데이터를 가져온다.
  const [posts, setPosts] = useState([]);
  const [latestId, setLatestId] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3001/post")
      .then((response) => {
        setPosts(response.data);
        console.log(posts.length);
        setLatestId(posts.length - 1);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(posts);
    console.log(latestId);
  }, []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const today = new Date();
  const date = new Date(+today + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, "").split(" ")[0];
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title && content) {
      axios
        .post("http://localhost:3001/post", newPost)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(newPost);
    } else {
      //모달띄우기
    }
  };
  const newPost = { id: posts.length > 0 ? latestId + 1 : 1, title, content, date: date };

  return (
    <>
      <form>
        <SNewPostCard>
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
        <SButtonDiv onClick={onSubmitHandler}>
          <GrayButton>완료</GrayButton>
        </SButtonDiv>
      </form>
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
`;
const SButtonDiv = styled.div`
  padding-left: 30px;
  padding-top: 15px;
`;
