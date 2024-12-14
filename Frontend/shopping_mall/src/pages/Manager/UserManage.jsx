import React, { useState } from "react";
import {
  PageContainer,
  FilterContainer,
  Title,
  UserTable,
  TableHeader,
  TableRow,
  TableCell,
  ViewButton,
} from "./ManagerStyle";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";
import { useNavigate } from "react-router-dom";

const initialUserList = [
  { id: 1, date: "20XX.MM.DD - HH:MM", nickname: "유저1", userId: "ID001", reportCount: 2 },
  { id: 2, date: "20XX.MM.DD - HH:MM", nickname: "유저2", userId: "ID002", reportCount: 5 },
  { id: 3, date: "20XX.MM.DD - HH:MM", nickname: "유저3", userId: "ID003", reportCount: 1 },
  { id: 4, date: "20XX.MM.DD - HH:MM", nickname: "유저4", userId: "ID004", reportCount: 4 },
  { id: 5, date: "20XX.MM.DD - HH:MM", nickname: "유저5", userId: "ID005", reportCount: 0 },
  { id: 6, date: "20XX.MM.DD - HH:MM", nickname: "유저6", userId: "ID006", reportCount: 3 },
];

const UserManage = () => {
  const [userList] = useState(initialUserList);
  const navigate = useNavigate();

  const handleView = (userId) => {
    navigate(`/userinfo/${userId}`); // userId를 파라미터로 전달
  };

  return (
    <PageContainer>
      {/* 상단 Header */}
      <Header />

      {/* 타이틀 영역 */}
      <FilterContainer>
        <Title>회원 목록</Title>
      </FilterContainer>

      {/* 회원 리스트 테이블 */}
      <UserTable>
        <thead>
          <TableRow>
            <TableHeader>날짜</TableHeader>
            <TableHeader>닉네임</TableHeader>
            <TableHeader>ID</TableHeader>
            <TableHeader>신고 횟수</TableHeader>
            <TableHeader>조회</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {userList.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.nickname}</TableCell>
              <TableCell>
                <strong>{user.userId}</strong>
              </TableCell>
              <TableCell>{user.reportCount}</TableCell>
              <TableCell>
                <ViewButton onClick={() => handleView(user.userId)}>조회</ViewButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </UserTable>

      {/* 하단 Footer */}
      <Footer />
    </PageContainer>
  );
};

export default UserManage;
