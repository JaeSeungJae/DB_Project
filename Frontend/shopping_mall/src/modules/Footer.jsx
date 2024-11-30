import React from "react";
import { FooterContainer } from "../pages/Auth/AuthStyle";
import { FooterButton } from "../pages/Auth/AuthStyle";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <FooterButton onClick={()=>{
        navigate('/');
        }}>Home</FooterButton>
      <FooterButton>Notice</FooterButton>
      <FooterButton>Chat</FooterButton>
      <FooterButton>MyPage</FooterButton>
    </FooterContainer>
  );
};

export default Footer;
