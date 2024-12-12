import {React, useState} from "react";
import { PageContainer, LoginBox, Title, InputField, ButtonGroup, ActionButton, LoginButton } from "./AuthStyle";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const getLogin = async () => {    
        try {
            if (!id || !pw) {
                alert('아이디나 비밀번호를 입력해주세요.');
                return;
            }
            const response = await fetch('http://localhost:8080/rest/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    pw: pw
                })
            });
            const data = await response.json();
            if (data.result === "success") {
                localStorage.setItem('id', 1);
                navigate('/');
            }
            else {
                alert ('로그인 에러');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <PageContainer>
            <LoginBox>
            <Title>Login</Title>
            <form>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <label htmlFor="id" style={{ marginRight: "50px", minWidth: "50px", textAlign: "right" }}>ID</label>
                    <InputField id="id" type="text" placeholder="Enter your ID" 
                    value={id} onChange={(e) => setId(e.target.value)}/>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <label htmlFor="pw" style={{ marginRight: "50px", minWidth: "50px", textAlign: "right" }}>PW</label>
                    <InputField id="pw" type="password" placeholder="Enter your Password" 
                    value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password"/>
                </div>
                <LoginButton onClick={(e)=>{e.preventDefault(); getLogin();}}>로그인</LoginButton>
                <ButtonGroup>
                    <ActionButton type="button" onClick={()=>navigate('/register')}>회원가입</ActionButton>
                    <ActionButton type="button">ID를 잊으셨나요?</ActionButton>
                    <ActionButton type="button">PW를 잊으셨나요?</ActionButton>
                </ButtonGroup>
            </form>
            </LoginBox>
      </PageContainer>
    )
}

export default Login;