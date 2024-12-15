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
        if ((localStorage.getItem('id')) === 0) {
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
                <MyPageContainer>
                    <Button onClick={()=>navigate('/mypage/favorite')}>관심 목록</Button>
                    <Button onClick={()=>navigate('/mypage/sell')}>판매 내역</Button>
                    <Button onClick={()=>navigate('/mypage/buy')}>구매 내역</Button>
                </MyPageContainer>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <SideButton onClick={()=>navigate('/mypage/profile')}>프로필</SideButton> 
                    <SideButton>회원탈퇴</SideButton>
                </div>
            </MyPageBox>

        </PageContainer>
    )
}

export default MyPage;