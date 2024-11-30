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

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #c8facc;
  padding: 10px 0;
  height: 30px;
`

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

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: #d9e9d9; /* 연한 초록 배경 */
`;

// 로그인 박스
export const LoginBox = styled.div`
  background-color: #eafaea;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 50%;
  text-align: center;
  margin: 40px;
  margin-bottom : 150px;
  margin-top: 90px;
`;

// 제목
export const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

// 입력 필드 스타일
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
`;

// 버튼 스타일
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  color: #565;
  cursor: pointer;

  &:hover {
    background-color: #b6e9bb;
  }
`;

export const LoginButton = styled.button`
  background-color: #c8facc;
  border: none;
  border-radius: 50px;
  padding: 10px 15px;
  font-size: 19px;
  cursor: pointer;
  color: #333;
  width: 30%;
  height: 100px;
  margin-bottom: 50px;
  &:hover {
    background-color: #b6e9bb;
  }
`



export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  min-width: 100px;
  text-align: right;
  margin-right: 10px;
`;

export const SmallInput = styled(InputField)`
  width: 30%;
  margin-left: 5px;
`;

export const Button = styled.button`
  background-color: #eaeaea;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const ColumnFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`