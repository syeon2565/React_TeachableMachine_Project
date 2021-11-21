import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
`;
const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 40rem;
    height: 70%;
    padding: 16px;
    background: rgb(25, 31, 44);
    border-radius: 10px;
`;
const Nav = styled.div`
    height: 43px;
    width: 136px;
    top: -157px;
    border-radius: nullpx;
    font-size: 25px;
    color: #ffffff;
`
const But1 = styled.div`
    height: 34px;
    width: 96px;
    left: 120px;
    top: 500px;
    border-radius: 0px;
    position: absolute;
    text-align: center;
    background: #C4C4C4;
`

const But2 = styled.div`
    height: 34px;
    width: 96px;
    left:450px;
    top: 500px;
    border-radius: 0px;
    text-align: center;
    position: absolute;
    background: #C4C4C4;
`
const Text = styled.div`
    height: 44px;
    width: 300px;
    left: 66px;
    top: -78px;
    border-radius: nullpx;
    padding-left:360px;
    font-size: 20px;
    color: #ffffff;
`

const Tutorial2 = () => {
    return (
        <div>
            <Background>
                <ModalContainer>
                    <Nav>간단 사용법</Nav>
                    <Link to="../tutorial1" style={{ textDecoration: 'none' ,  color: '#000' }}>
                        <But1>Previous</But1>
                    </Link>
                    <Link to="../tutorial3" style={{ textDecoration: 'none' ,  color: '#000' }}>
                        <But2>Next</But2>
                    </Link>
                    <Text>자신의 얼굴과 어깨선을 <br />
                        비춘 후, 움직이는 자세에 따라<br />
                        거북목인지 정상범위인지 나타납니다. </Text>
                </ModalContainer>
            </Background>
        </div>
    )
}
export default Tutorial2;