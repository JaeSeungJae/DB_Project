import styled from "styled-components";
import { LoginBox, LoginButton } from "../Auth/AuthStyle";

export const Button = styled(LoginButton)`
    width: 400px;
`

export const MyPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
`
export const MyPageBox = styled(LoginBox)`
    margin-top: 20px;
`

export const SideButton = styled(LoginButton) `
    width: 100px;
    height: 50px;
    font-size: 12px;
    margin: 10px;
`


export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
`;
export const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
    
    padding: 24px;
    border-radius: 8px; // 테두리 둥글게
    margin-bottom: 24px; // 마진 변경
`;
export const StyledInput = styled.input`
width: 70%;
height: ${props => props.height || 30}px;
padding: 0 12px;
padding-left: 44px; //
background-color: #f8fff8;

font-size: 16px;
border: 1px solid #bacaba; // 테두리 색상 조정
//border-top: none; // 모든 입력 필드의 상단 테두리 제거
box-sizing: border-box;
margin: 0px;
margin-left: 115px;



&:focus {
  border-color: #bacaba;
  outline: none;
}

// 첫 번째 입력 필드의 상단 테두리를 추가
&:first-child {
  border-top: 1px solid #bacaba;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

// 마지막 입력 필드의 하단 테두리를 추가
// &:last-child {
//   border-bottom: 1px solid #bacaba;
//   border-bottom-left-radius: 8px;
//   border-bottom-right-radius: 8px;
// }


&:nth-child(2) {
  border-top: 1px solid #bacaba;
  margin-top: -20px;
}

&:nth-child(3) {
  border-top: 1px solid #bacaba;
  margin-top: -20px;
}

&:nth-child(4) {
  border-top: 1px solid #bacaba;
  margin-top: -20px;
}

&:last-child {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-top: -20px;
}

&::placeholder {
  color: ${props => props.readOnly ? 'black' : 'gray'};
}

`;

export function TextInput(props) {
    const { type, height, value, onChange, placeHolder, disabled } = props;

    return <StyledInput type={type || "text"} height={height} value={value} 
    onChange={onChange} placeholder={placeHolder} readOnly={disabled ? true : false}/>;
}