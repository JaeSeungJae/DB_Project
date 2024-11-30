import React, { useEffect } from "react";
import { useState } from "react";
import { Header, PageContainer } from "../Market/MarketStyle";
import { Button, MyPageContainer, MyPageBox, SideButton } from "./MyPageStyle";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const [modifyInfo, setModifyInfo] = useState(false);
    const navigate = useNavigate();
    const [nickname, setNickname] = useState("nickname");
    const [id, setId] = useState("id");
    const [pw, setPW] = useState("pw");
    const [pwCheck, setPwCheck] = useState("pw");
    useEffect(() => {
        if (Number(localStorage.getItem('id')) !== 1) {
            navigate('/login');
        }
    }, []);
    const checkPW = () => {
        if (pw !== pwCheck) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        setModifyInfo(false);
    }
    return (
        <PageContainer>
            <Header>
                <h2>마이페이지</h2>
            </Header>
            <MyPageBox>
                <p>아이디 : {id}</p>
                {modifyInfo === false ? (<p>닉네임 : {nickname}</p>)
                : <p>닉네임 <input type="text" value={nickname} onChange={(e)=>setNickname(e.target.value)} /></p>}
                {modifyInfo === false ? (<p>비밀번호 : ********</p>)
                : <p>비밀번호 <input type="password" value={pw} onChange={(e)=>setPW(e.target.value)}/></p>}
                {modifyInfo === true && <p>비밀번호 확인 <input type="password" value={pwCheck} onChange={(e)=>setPwCheck(e.target.value)}/></p>}
                {modifyInfo ? 
                <SideButton onClick={()=>checkPW()}>수정 완료</SideButton>
                :<SideButton onClick={()=>setModifyInfo(true)}>수정</SideButton>}

                <MyPageContainer>
                    <Button>관심 목록</Button>
                    <Button>내가 쓴 글</Button>
                    <Button>판매 내역</Button>
                    <Button>구매 내역</Button>
                </MyPageContainer>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <SideButton>회원탈퇴</SideButton>
                </div>
            </MyPageBox>

        </PageContainer>
    )
}

export default MyPage;