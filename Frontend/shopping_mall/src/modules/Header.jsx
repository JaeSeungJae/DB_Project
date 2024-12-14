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
      <Button style={{margin: '40px'}} onClick={logout}>{localStorage.getItem("id") === "0" ? "로그인" : "로그아웃"}</Button> 
    </HeaderContainer>
  );
};

export default Header;
