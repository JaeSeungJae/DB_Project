import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, LoginBox, ColumnFlexBox, Button } from "./AuthStyle";

const Main = () => {
    const navigate = useNavigate();
    
    useEffect(()=> {
        if (!localStorage.getItem('id')) {
            navigate('/login');
        }
    }, []);
    
    return (
        <PageContainer>
            <LoginBox>
                <ColumnFlexBox>
                <Button style={{ margin: "40px", height: "100px" }} onClick={() => navigate("/board")}>자유게시판</Button>
                <Button style={{margin: '40px', height: '100px'}} onClick={()=>navigate('/market')}>마켓</Button>
                <Button style={{ margin: "40px", height: "100px" }} onClick={() => navigate("/manager")}>관리자</Button>
                </ColumnFlexBox>
            </LoginBox>
        </PageContainer>
    );
};

export default Main;