import React from "react";
import { useState } from "react";
import { PageContainer, Header } from "../Market/MarketStyle";
import { Button } from "./MyPageStyle";
import { InputsContainer, TextInput } from "./MyPageStyle";
import { Container } from "./MyPageStyle";

const Profile = () => {
    const [email, setEmail] = useState(''); // 이메일
    const [password, setPassword] = useState(''); // 비밀번호
    const [verifyPwd, setVerifyPwd] = useState(''); // 비밀번호 확인
    const [username, setName] = useState(''); // id
    const [nickname, setNickname] = useState(''); // 닉네임
    const passwordCheck = password === verifyPwd; // 비밀번호 확인 시 체크하는 변수 (boolean)
    const [pwVb, setPwVb] = useState(false); // 비밀번호 암호화
    const handleSubmit = () => {
        // api로 업데이트하기
    }
    return (
        <PageContainer>
            <Header>
                <h2>프로필</h2>
            </Header>
            <Container>
            <InputsContainer>
                <TextInput 
                    height={60}
                    value={username}
                    placeHolder="아이디"
                    disabled={true}  // 여기를 소문자로 변경
                    // icon="ID"
                />
                <TextInput 
                    height={60}
                    value={password}
                    type={pwVb ? "text" : "password"}
                    onChange={(event) => {  // 여기를 camelCase로 변경
                        setPassword(event.target.value);
                    }}
                    placeHolder="비밀번호"  // 여기를 소문자로 변경
                    // icon="password"
                />
                <TextInput 
                    height={60}
                    value={verifyPwd}
                    type={pwVb ? "text" : "password"}
                    onChange={(event) => {  // 여기를 camelCase로 변경
                        setVerifyPwd(event.target.value);
                    }}
                    placeHolder="비밀번호 확인"  // 여기를 소문자로 변경
                    // icon="password"
                />
                <TextInput 
                    height={60}
                    value={nickname}
                    onChange={(event) => {  // 여기를 camelCase로 변경
                        setNickname(event.target.value);
                    }}
                    placeHolder={nickname ? nickname : "닉네임"}  // 여기를 소문자로 변경
                    // icon="phone"
                />
                <TextInput 
                    height={60}
                    value={email}
                    onChange={(event) => {  // 여기를 camelCase로 변경
                        setEmail(event.target.value);
                    }}
                    placeHolder={email ? email : "이메일"}  // 여기를 소문자로 변경
                    // icon="email"
                />
                </InputsContainer>
                {!passwordCheck && (
                    <p style={{textAlign: 'center', color:'red'}}>비밀번호가 일치하지 않습니다.</p>
                )}
                {passwordCheck && (
                    <p style={{textAlign: 'center', color:'green'}}>비밀번호가 일치합니다.</p>
                )}
                <div style={{textAlign: 'center', color: 'black'}}>
                    비밀번호 보기
                    <input type="checkbox"
                    checked={pwVb}
                    onChange={e => setPwVb(e.target.checked)}>
                    </input>
                </div>
                </Container>
                <Button
                    style={{marginBottom: '200px'}}
                    onClick={handleSubmit}>수정하기</Button>
        </PageContainer>
    )
}

export default Profile;