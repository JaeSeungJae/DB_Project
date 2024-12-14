import React from "react";
import {
  PageContainer,
  Title,
  StyledButton,
  ButtonContainer,
} from "./ManagerStyle";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";
import { useNavigate } from "react-router-dom"; 

const ManagerMain = () => {
    const navigate = useNavigate();
  return (
    <PageContainer>
      <Header />
      <Title>관리자</Title>

      <ButtonContainer>
        <StyledButton onClick={() => navigate("/board-manage")}>
          자유게시판 관리
        </StyledButton>
        <StyledButton onClick={() => navigate("/market-manage")}>
          Market 관리
        </StyledButton>
        <StyledButton onClick={() => navigate("/user-manage")}>
          회원 관리
        </StyledButton>
        <StyledButton onClick={() => navigate("/report-manage")}>
          신고 내역 관리
        </StyledButton>
        <StyledButton onClick={() => navigate("/setting-manage")}>
          관리자 설정
        </StyledButton>
      </ButtonContainer>
      <Footer />
    </PageContainer>
  );
};

export default ManagerMain;
