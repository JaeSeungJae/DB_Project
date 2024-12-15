import React, { useEffect, useState } from "react";
import {
  PageContainer,
  FilterContainer,
  Title,
  AddButton,
  Table,
  TableRow,
  TableHeader,
  TableCell,
} from "./BoardStyle";
import Header from "../../modules/Header"; 
import Footer from "../../modules/Footer"; 
import { useNavigate } from "react-router-dom"; 

const BoardMain = () => {
  const navigate = useNavigate();

  // 날짜 변환 함수 (년.월.일 - 시:분)
  const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}.${month}.${day} - ${hours}:${minutes}`;
  };

  // 게시글 데이터
  const [boardItems, setBoardItems] = useState([]);

  const handleRowClick = (id) => {
    navigate(`/article/${id}`);
  };

  const handleAddPost = () => {
    navigate("/post");
  };

  const getBoard = async () => {
    try {
      const response = await fetch('http://localhost:8080/rest/getBoard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
          const data = await response.json();
          console.log(data);
          setBoardItems(data);
      }
    }
    catch {

    }
  }

  useEffect(()=> {
    getBoard();
  }, [])

  return (
    <PageContainer>
      <Header />

      <FilterContainer>
        <Title>자유게시판</Title>
      </FilterContainer>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>작성일</TableHeader>
            <TableHeader>닉네임</TableHeader>
            <TableHeader>제목</TableHeader>
            <TableHeader>내용 미리보기</TableHeader>
            <TableHeader>추천수</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {boardItems.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <TableCell>{formatDateTime('2024-12-11T00:00:00')}</TableCell>
              <TableCell>관리자</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.content.slice(0, 20)}...</TableCell>
              <TableCell>{item.likes}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <AddButton onClick={handleAddPost}>
        <span style={{ fontSize: "24px", lineHeight: "50px" }}>+</span>
      </AddButton>

      <Footer />
    </PageContainer>
  );
};

export default BoardMain;
