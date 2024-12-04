import React from "react";
import { HeaderContainer } from "../pages/Auth/AuthStyle";
import { Button } from "../pages/Auth/AuthStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem('id', 0);
    navigate('/login');
  }
  return (
    <HeaderContainer>
      {Number(localStorage.getItem('id')) ? <Button style={{margin: '40px'}} onClick={logout}>로그아웃</Button> 
      : <Button style={{margin: '40px'}} onClick={()=>{navigate('/login')}}>로그인</Button>}
    </HeaderContainer>
  );
};

export default Header;
