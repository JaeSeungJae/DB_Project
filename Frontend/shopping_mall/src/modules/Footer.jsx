import React from "react";
import { FooterContainer } from "../styles/style";
import { FooterButton } from "../styles/style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterButton>Home</FooterButton>
      <FooterButton>Notice</FooterButton>
      <FooterButton>Chat</FooterButton>
      <FooterButton>MyPage</FooterButton>
    </FooterContainer>
  );
};

export default Footer;
