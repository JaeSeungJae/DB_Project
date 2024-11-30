import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, LoginBox, ColumnFlexBox, Button } from "./AuthStyle";

const Main = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        if (localStorage.getItem('id') !== '1') {
            navigate('/login');
        }
    }, [])
    
    return (
        <PageContainer>
            <LoginBox>
                <ColumnFlexBox>
                <Button style={{margin: '40px', height: '100px'}}>자유게시판</Button>
                <Button style={{margin: '40px', height: '100px'}} onClick={()=>navigate('/market')}>마켓</Button>
                </ColumnFlexBox>
            </LoginBox>
        </PageContainer>
    );
}

export default Main;