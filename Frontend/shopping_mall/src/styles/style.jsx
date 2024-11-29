import React from "react";
import styled from "styled-components";

// Footer 스타일
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #c8facc; /* 연한 초록색 배경 */
  padding: 10px 0;
  height: 100px;
`;

// 버튼 스타일
export const FooterButton = styled.button`
  background-color: #c8facc; /* 버튼 배경 */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  font-weight: bold;
  height: 100%;
  width: 25%;
  &:hover {
    background-color: #b6e9bb; /* 버튼 호버 효과 */
  }
`;