import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동
import {
  PageContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Title,
  ViewButton,
} from "./ManagerStyle";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";

// 초기 신고 내역 데이터
const initialReports = [
  {
    id: 1,
    date: "20XX.MM.DD - HH:MM",
    reporterId: "ID001",
    reportedId: "ID005",
    reason: "욕설",
  },
  {
    id: 2,
    date: "20XX.MM.DD - HH:MM",
    reporterId: "ID002",
    reportedId: "ID006",
    reason: "부적절한 내용",
  },
  {
    id: 3,
    date: "20XX.MM.DD - HH:MM",
    reporterId: "ID003",
    reportedId: "ID007",
    reason: "스팸",
  },
];

const ReportManage = () => {
  const [reports] = useState(initialReports);
  const navigate = useNavigate(); 

  const handleViewUserInfo = (userId) => {
    navigate(`/userinfo/${userId}`);
  };

  return (
    <PageContainer>
      <Header />
      <Title>신고 내역 관리</Title>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>날짜</TableHeader>
            <TableHeader>신고자 ID</TableHeader>
            <TableHeader>피신고자 ID</TableHeader>
            <TableHeader>신고 사유</TableHeader>
            <TableHeader>신고 조회</TableHeader>
            <TableHeader>피신고자 정보</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.date}</TableCell>
              <TableCell>{report.reporterId}</TableCell>
              <TableCell>{report.reportedId}</TableCell>
              <TableCell>{report.reason}</TableCell>
              <TableCell>
                <ViewButton onClick={() => handleViewUserInfo()}>
                  신고글 조회
                </ViewButton>
              </TableCell>
              <TableCell>
                <ViewButton onClick={() => handleViewUserInfo(report.reportedId)}>
                  피신고자 정보
                </ViewButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Footer />
    </PageContainer>
  );
};

export default ReportManage;
