import {React, useState} from "react";
import { PageContainer, Title, LoginBox, InputGroup, Label, InputField, SmallInput, ButtonGroup, Button } from "./AuthStyle";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const getRegister = async () => {
    try {
      if (!id || !pw || !fname || !lname || !nickname) {
        alert('전부 작성');
        return;
      }
      const response = await fetch('http://localhost:8080/rest/registerMember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          pw: pw,
          fname: fname,
          lname: lname,
          nickname: nickname,
        })
      });
      if (response) {
      const data = await response.json();
      if (data.result === "success") {
        alert('회원가입이 완료되었습니다!');
        navigate('/');
      }
      else {
        alert('회원가입 오류');
      }}
      else {
        console.log('error');
      }
    }
    catch {

    }
  }
    return (
        <PageContainer>
            <LoginBox>
            <Title>회원가입</Title>
            <form>
          {/* ID */}
          <InputGroup>
            <Label htmlFor="id">ID</Label>
            <InputField id="id" type="text" placeholder="Enter your ID" 
                    value={id} onChange={(e) => setId(e.target.value)}/>
          </InputGroup>

          {/* PW */}
          <InputGroup>
            <Label htmlFor="pw">PW</Label>
            <InputField id="pw" type="password" placeholder="Enter your Password"
              value={pw} onChange={(e) => setPw(e.target.value)} />
          </InputGroup>

          {/* Name */}
          <InputGroup>
            <Label htmlFor="fname">First Name</Label>
            <InputField id="fname" type="text" placeholder="Enter your Name"
              value={fname} onChange={(e) => setFname(e.target.value)} />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="lname">Last Name</Label>
            <InputField id="lname" type="text" placeholder="Enter your Name"
              value={lname} onChange={(e) => setLname(e.target.value)} />
          </InputGroup>

          {/* Nickname */}
          <InputGroup>
            <Label htmlFor="nickname">Nickname</Label>
            <InputField id="nickname" type="text" placeholder="Enter your Nickname"
              value={nickname} onChange={(e) => setNickname(e.target.value)} />
          </InputGroup>

          {/* 회원가입 버튼 */}
          <Button type="button" style={{ marginTop: "20px", width: "100%" }} onClick={(e)=>{e.preventDefault(); getRegister();}}>
            회원가입 완료
          </Button>
        </form>
            </LoginBox>
        </PageContainer>
    );
}

export default Register;