/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from 'styled-components';
import ex2 from '../img/ex2.gif';

const Logo = styled.div`
width: 463px;
height: 164px;
font-family: Ramaraja;
font-size: 72px;
line-height: 123px;
color: #000000;
`;

const Login = styled.div`
width: 291px;
height: 82px;
font-size: 40px;
line-height: 80px;
background: #FFEB00;
`;



const SubMain = styled.div`
width: 642px;
font-style: normal;
font-weight: normal;
font-size: 50px;
line-height: 62px;
color: #000000;
`;

const Button = styled.div`
  width: 372px;
  height: 134px;
  background: #1967D2;
  font-size: 45px;
  line-height: 130px;
  mix-blend-mode: normal;
 `;

const Main = () => {
    return (
        <div>
            {/* <div className="nav">
                <div className="logo">camble</div>
                <div className="login">카카오로 로그인하기</div>
            </div> */}
            <Logo>Camble</Logo>
            <Login>카카오 로그인하기</Login>
            <div className="body">
                <img src={ex2} alt="ex2" width="300" />
                <SubMain>
                    당신의 목은 안녕하신가요?
                </SubMain>

                <Button>거북목 측정하러 가기</Button>
            </div>
        </div>
    )
}
export default Main;