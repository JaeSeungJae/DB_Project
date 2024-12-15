import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위해 추가
import {
  PageContainer,
  InfoContainer,
  Title,
  ProfileTitle,
  InfoRow,
  InfoLabel,
  InfoValue,
  EditButton,
  ForceLogoutButton,
  InputField,
} from "./ManagerStyle";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";

const UserInfo = () => {
  const navigate = useNavigate(); 

  const [userInfo, setUserInfo] = useState({
    name: "Kim Kwangwoon",
    nickname: "닉네임",
    id: "kwxxxxxxxxxxxxxx",
    mileage: "xxx,xxx점",
    trustScore: "xx%",
    userLevel: "xx",
    reportCount: "xx회",
    postCount: "xx개",
    salePostCount: "xx개",
  });

  const [editField, setEditField] = useState(null); // 수정 중인 필드

  // 수정 시작
  const handleEdit = (field) => {
    setEditField(field);
  };

  // 수정 완료
  const handleSave = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
    setEditField(null);
  };

  // 강제 탈퇴 기능
  const handleForceLogout = () => {
    alert("해당 회원 정보가 삭제되었습니다."); // 팝업창 표시
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <PageContainer>
      <Header />
      <Title>회원 정보</Title>

      <InfoContainer>
        <ProfileTitle>Profile</ProfileTitle>

        <InfoRow>
          <InfoLabel>Name :</InfoLabel>
          <InfoValue>{userInfo.name}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Nickname :</InfoLabel>
          {editField === "nickname" ? (
            <InputField
              defaultValue={userInfo.nickname}
              onBlur={(e) => handleSave("nickname", e.target.value)}
            />
          ) : (
            <InfoValue>{userInfo.nickname}</InfoValue>
          )}
          <EditButton onClick={() => handleEdit("nickname")}>수정</EditButton>
        </InfoRow>

        <InfoRow>
          <InfoLabel>ID :</InfoLabel>
          <InfoValue>{userInfo.id}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>마일리지 :</InfoLabel>
          {editField === "mileage" ? (
            <InputField
              defaultValue={userInfo.mileage}
              onBlur={(e) => handleSave("mileage", e.target.value)}
            />
          ) : (
            <InfoValue>{userInfo.mileage}</InfoValue>
          )}
          <EditButton onClick={() => handleEdit("mileage")}>수정</EditButton>
        </InfoRow>

        <InfoRow>
          <InfoLabel>거래 신뢰도 :</InfoLabel>
          {editField === "trustScore" ? (
            <InputField
              defaultValue={userInfo.trustScore}
              onBlur={(e) => handleSave("trustScore", e.target.value)}
            />
          ) : (
            <InfoValue>{userInfo.trustScore}</InfoValue>
          )}
          <EditButton onClick={() => handleEdit("trustScore")}>수정</EditButton>
        </InfoRow>

        <InfoRow>
          <InfoLabel>회원 권한 단계 :</InfoLabel>
          {editField === "userLevel" ? (
            <InputField
              defaultValue={userInfo.userLevel}
              onBlur={(e) => handleSave("userLevel", e.target.value)}
            />
          ) : (
            <InfoValue>{userInfo.userLevel}</InfoValue>
          )}
          <EditButton onClick={() => handleEdit("userLevel")}>수정</EditButton>
        </InfoRow>

        <InfoRow>
          <InfoLabel>피신고 횟수 :</InfoLabel>
          <InfoValue>{userInfo.reportCount}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>작성 게시글 수 :</InfoLabel>
          <InfoValue>{userInfo.postCount}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>작성 판매글 수 :</InfoLabel>
          <InfoValue>{userInfo.salePostCount}</InfoValue>
        </InfoRow>

        <div style={{ marginTop: "20px" }}>
          <ForceLogoutButton onClick={handleForceLogout}>강제 탈퇴</ForceLogoutButton>
        </div>
      </InfoContainer>

      <Footer />
    </PageContainer>
  );
};

export default UserInfo;
