import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Title,
  ButtonContainer,
  StyledButton,
  LogoutButton,
} from "./ManagerStyle";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";

const SettingManage = () => {
  const navigate = useNavigate();

  const handleIdChange = () => {
    alert("아이디 변경 화면으로 이동합니다.");
  };

  const handlePasswordChange = () => {
    alert("비밀번호 변경 화면으로 이동합니다.");
  };

  const handleLogout = () => {
    alert("로그아웃 되었습니다.");
    navigate("/"); 
  };

  return (
    <PageContainer>
      <Header />
      <Title>관리자 설정</Title>

      <ButtonContainer>
        <StyledButton onClick={handleIdChange}>아이디 변경</StyledButton>
        <StyledButton onClick={handlePasswordChange}>비밀번호 변경</StyledButton>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </ButtonContainer>

      <Footer />
    </PageContainer>
  );
};

export default SettingManage;