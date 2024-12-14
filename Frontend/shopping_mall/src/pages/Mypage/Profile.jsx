import React, { useEffect } from "react";
import { useState } from "react";
import { PageContainer, Header } from "../Market/MarketStyle";
import { Button } from "./MyPageStyle";
import { InputsContainer, TextInput } from "./MyPageStyle";
import { Container } from "./MyPageStyle";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [mileage, setMileage] = useState(0); // 마일리지
    const [amount, setAmount] = useState(0)
    const [password, setPassword] = useState(''); // 비밀번호
    const [verifyPwd, setVerifyPwd] = useState(''); // 비밀번호 확인
    const [username, setName] = useState(''); // id
    const [nickname, setNickname] = useState(''); // 닉네임
    const passwordCheck = password === verifyPwd; // 비밀번호 확인 시 체크하는 변수 (boolean)
    const [pwVb, setPwVb] = useState(false); // 비밀번호 암호화
    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const response = await fetch('http://localhost:8080/rest/getProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: localStorage.getItem('id') 
                })
            });
            if (response) {
                const data = await response.json();
                console.log(data);
                setName(data.data.id);
                setNickname(data.data.nickname);
                setMileage(data.data.mileage);
                setAmount(data.data.amount);
            }
        }
        catch {

        }
    }
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/rest/modifyProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: localStorage.getItem('id'),
                    pw: password,
                    nickname: nickname                    
                })
            });
            if (response) {
                const data = await response.json();
                console.log(data);
                alert('정보 변경 완료!');
                navigate('/mypage');
            }
        }
        catch {

        }
    }
    const chargeMoney = async () => {
        const response = await fetch('http://localhost:8080/rest/chargeAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: localStorage.getItem('id'),
                amount: amount
            })
        });
        if (response) {
            const data = await response.json();
            console.log(data);
            alert('충전 완료!');
        }
    }
    useEffect(()=> {
        getProfile();
    }, [])
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
            </InputsContainer>
            <InputsContainer>
                <TextInput 
                    height={60}
                    value={`잔액 : ${amount}원`}
                    disabled
                    placeHolder={amount ? amount : "잔액"}  // 여기를 소문자로 변경
                    // icon="email"
                />
                <TextInput 
                    height={60}
                    value={`마일리지 : ${mileage}원`}
                    disabled
                    placeHolder={mileage ? mileage : "마일리지 금액"}  // 여기를 소문자로 변경
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
                    style={{width: '250px', height: '50px'}}
                    onClick={handleSubmit}>수정하기</Button>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{margin: '10px'}}>금액 충전</p>
                    <input type="number" onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <Button
                    style={{width: '250px', height: '50px',marginTop: '50px', marginBottom: '200px', }}
                    onClick={chargeMoney}>충전하기</Button>
        </PageContainer>
    )
}

export default Profile;