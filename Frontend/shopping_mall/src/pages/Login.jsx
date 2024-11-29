import React from "react";
import { PageContainer, LoginBox, Title, InputField, ButtonGroup, ActionButton, LoginButton } from "../styles/style";

const Login = () => {
    
    return (
        <PageContainer>
            <LoginBox>
            <Title>Login</Title>
            <form>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <label htmlFor="id" style={{ marginRight: "50px", minWidth: "50px", textAlign: "right" }}>ID</label>
                    <InputField id="id" type="text" placeholder="Enter your ID" />
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <label htmlFor="pw" style={{ marginRight: "50px", minWidth: "50px", textAlign: "right" }}>PW</label>
                    <InputField id="pw" type="password" placeholder="Enter your Password" />
                </div>
                <LoginButton>로그인</LoginButton>
                <ButtonGroup>
                    <ActionButton type="button">회원가입</ActionButton>
                    <ActionButton type="button">ID를 잊으셨나요?</ActionButton>
                    <ActionButton type="button">PW를 잊으셨나요?</ActionButton>
                </ButtonGroup>
            </form>
            </LoginBox>
      </PageContainer>
    )
}

export default Login;