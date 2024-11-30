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