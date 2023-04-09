import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pencil from "../img/newpostIcon/pencil.svg";
import Pagination from "@mui/material/Pagination";

const WikiPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postData, setPostData] = useState([]);
  //JSON서버로 데이터를 받아오는 부분

  const getData = async () => {
    const { data } = await axios.get("http://localhost:3001/post?_sort=id&_order=desc");
    setPostData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (postData) {
      //sort()메서드를 이용해 b의 id에서 a의 id를 뺀 결과가 음수면 b를 a보다 우선시하고,
      //결과가 양수면 a를 b보다 우선시한다. 이를 통해 배열을 내림차순으로 정렬할 수 있다.
      const sortedData = [...postData].sort((a, b) => b.id - a.id);
      setPosts(sortedData);
    }
  }, [postData]);

  //페이지네이션기능을 위한 변수들과 함수
  const itemsPerPage = 5;
  const totalItemsCount = postData ? postData.length : 0;
  const pageCount = Math.ceil(totalItemsCount / itemsPerPage);
  const handlePageChange = (e, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <STitleSpan>Global Knowledge Wiki</STitleSpan>
      <SAddPost onClick={() => navigate("/newpost")}>
        <SPencilIcon src={pencil} alt="pencil" />
        새로운 wiki 작성하기
      </SAddPost>
      <SListBox>
        <S1stRow>
          <STitle>제목 </STitle>
          <SDate>작성일</SDate>
        </S1stRow>

        {postData &&
          postData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((a) => (
            <SContentContainer key={a.id}>
              <SContentTitle onClick={() => navigate(`/detail/${a.id}`)}>{a.title}</SContentTitle>
              <SContentDate>{a.date}</SContentDate>
            </SContentContainer>
          ))}
        <SPagenationDiv>
          <Pagination
            count={pageCount}
            page={currentPage}
            itemscountperpage={itemsPerPage}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </SPagenationDiv>
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
  height: auto;
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
const SPagenationDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
`;
