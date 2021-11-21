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
    left:120px;
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
    width: 200px;
    left: 66px;
    top: -78px;
    border-radius: nullpx;
    padding-left:400px;
    font-size: 20px;
    color: #ffffff;
`

const Tutorial3 = () => {
    return (
        <div>
            <Background>
                <ModalContainer>
                    <Nav>간단 사용법</Nav>
                    <Link to="../tutorial2" style={{ textDecoration: 'none' ,  color: '#000' }}>
                        <But1>Previous</But1>
                    </Link>
                    <Link to="../tutorial4" style={{ textDecoration: 'none' ,  color: '#000' }}>
                        <But2>Next</But2>
                    </Link>
                    <Text>측정하여,<br />
                        빨간색 파랑색 표시에따라<br />
                        알림이 울립니다.</Text>
                </ModalContainer>
            </Background>
        </div>
    )
}
export default Tutorial3;