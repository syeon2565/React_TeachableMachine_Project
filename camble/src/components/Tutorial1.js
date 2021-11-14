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

// const Nav = styled.div`
// height: 43px;
// width: 136px;
// padding-left:470px;
// top: -157px;
// border-radius: nullpx;
// font-size: 25px;
// `

const But = styled.div`
height: 34px;
width: 96px;
left: 740px;
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
padding-left:700px;
`

const Tutorial1 = () => {
    return (
        <div>
            <Background>
                <ModalContainer>
                    간단 사용법ㅂ
                    {/* <Nav>간단 사용법</Nav> */}
                    <Link to="../api">
                        건너뛰기
                    </Link>
                    <Link to="../tutorial2">
                        <But>Next</But>
                    </Link>
                    <Text>측정 버튼을 클릭하여<br />
                        웹캠 사용을 허락한다.</Text>
                </ModalContainer>
            </Background>
        </div>
    )
}
export default Tutorial1;