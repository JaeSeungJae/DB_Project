import React, { useState } from "react";
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
  const [boardItems, setBoardItems] = useState([
    { id: 1, title: "게시글 1", nickname: "유저1", date: "2024-12-04T12:30:00Z", content: "내용 미리보기 ..", likes: 3 },
    { id: 2, title: "게시글 2", nickname: "유저2", date: "2024-12-03T09:15:00Z", content: "내용 미리보기 ..", likes: 5 },
    { id: 3, title: "게시글 3", nickname: "유저3", date: "2024-12-02T18:45:00Z", content: "내용 미리보기 ..", likes: 1 },
  ]);

  const handleRowClick = (id) => {
    navigate(`/article/${id}`);
  };

  const handleAddPost = () => {
    navigate("/post");
  };

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
              <TableCell>{formatDateTime(item.date)}</TableCell>
              <TableCell>{item.nickname}</TableCell>
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
