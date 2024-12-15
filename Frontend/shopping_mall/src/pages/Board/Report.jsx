import React, { useState } from "react";
import {
  PageContainer,
  ReportContainer,
  ReportTitle,
  ReportSubtitle,
  RadioGroup,
  RadioButton,
  RadioLabel,
  SubmitButton,
} from "./BoardStyle.jsx";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";
import { useLocation, useNavigate } from "react-router-dom"; 

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const articleTitle = location.state?.title || "게시글 제목"; 
  const [selectedReason, setSelectedReason] = useState(""); 

  // 신고 제출 
  const handleSubmit = () => {
    if (!selectedReason) {
      alert("신고 사유를 선택해주세요.");
    } else {
      alert(`"${articleTitle}"에 대한 신고가 접수되었습니다.`);
      navigate(-1);
    }
  };

  return (
    <PageContainer>
      <Header />
      <ReportContainer>
        <ReportTitle>신고하기</ReportTitle>

        <RadioGroup>
          <RadioLabel>
            <RadioButton
              type="radio"
              value="스팸홍보/도배글"
              checked={selectedReason === "스팸홍보/도배글"}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            스팸홍보 / 도배글입니다.
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              type="radio"
              value="음란물"
              checked={selectedReason === "음란물"}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            음란물입니다.
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              type="radio"
              value="불법정보 포함"
              checked={selectedReason === "불법정보 포함"}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            불법 정보를 포함하고 있습니다. (불법 촬영 등)
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              type="radio"
              value="유해한 내용"
              checked={selectedReason === "유해한 내용"}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            청소년에게 유해한 내용입니다.
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              type="radio"
              value="욕설/혐오/차별"
              checked={selectedReason === "욕설/혐오/차별"}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            욕설/혐오/차별적 표현입니다.
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              type="radio"
              value="개인정보 노출"
              checked={selectedReason === "개인정보 노출"}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            개인정보 노출 게시물입니다.
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              type="radio"
              value="불쾌한 표현"
              checked={selectedReason === "불쾌한 표현"}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            불쾌한 표현이 있습니다.
          </RadioLabel>
        </RadioGroup>
        <SubmitButton onClick={handleSubmit}>신고 제출</SubmitButton>
      </ReportContainer>
      <Footer />
    </PageContainer>
  );
};

export default Report;
