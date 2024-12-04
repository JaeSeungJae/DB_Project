import React from "react";
import { PageContainer, Title, LoginBox, InputGroup, Label, InputField, SmallInput, ButtonGroup, Button } from "./AuthStyle";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
    return (
        <PageContainer>
            <LoginBox>
            <Title>회원가입</Title>
            <form>
          {/* ID */}
          <InputGroup>
            <Label htmlFor="id">ID</Label>
            <InputField id="id" type="text" placeholder="Enter your ID" />
          </InputGroup>

          {/* PW */}
          <InputGroup>
            <Label htmlFor="pw">PW</Label>
            <InputField id="pw" type="password" placeholder="Enter your Password" />
          </InputGroup>

          {/* Name */}
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <InputField id="name" type="text" placeholder="Enter your Name" />
          </InputGroup>

          {/* Nickname */}
          <InputGroup>
            <Label htmlFor="nickname">Nickname</Label>
            <InputField id="nickname" type="text" placeholder="Enter your Nickname" />
          </InputGroup>

          {/* 생년월일 */}
          <InputGroup>
            <Label htmlFor="birth">생년월일</Label>
            <SmallInput id="year" type="text" placeholder="년" />
            <SmallInput id="month" type="text" placeholder="월" />
            <SmallInput id="day" type="text" placeholder="일" />
          </InputGroup>

          {/* Email */}
          <InputGroup>
            <Label htmlFor="email">email</Label>
            <InputField id="email" type="email" placeholder="Enter your Email" />
          </InputGroup>

          {/* 인증번호 & 전송 버튼 */}
          <ButtonGroup>
            <Button type="button">인증번호 받기</Button>
            <Button type="button">전송</Button>
          </ButtonGroup>

          {/* 회원가입 버튼 */}
          <Button type="button" style={{ marginTop: "20px", width: "100%" }} onClick={()=>navigate('/')}>
            회원가입 완료
          </Button>
        </form>
            </LoginBox>
        </PageContainer>
    );
}

export default Register;