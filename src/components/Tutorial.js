import React, { useState } from "react";
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

const But = styled.div`
    height: 34px;
    width: 96px;
    left:450px;
    top: 500px;
    border-radius: 0px;
    text-align: center;
    position: absolute;
    background: #C4C4C4;

`
// const Text = styled.div`
//     height: 44px;
//     width: 200px;
//     left: 66px;
//     top: -78px;
//     border-radius: nullpx;
//     padding-left:400px;
//     font-size: 20px;
//     color: #ffffff;
// `

const Tutorial = () => {
    const [text, setText] = useState('웹 캠 사용을 허락한 후, 잠시 기다려주세요!')
    const onClickNext = () => setText("자신의 얼굴과 어깨선을 기준으로, 움직이는 자세에 따라 거북목인지 정상인지 나타납니다.");
    const onClickNext2 = () => setText("범위에 따라 거북목일 때의 비율이 높을 시 알림으로 경각심을 줄 수 있습니다.")
    const onClickNext3 = () => setText("자신의 거북목 측정값을 마이페이지에 기록하세요!")
    return (
        <div>
            <Background>
                <ModalContainer>
                    <Nav>간단 사용법</Nav>
                    <Link to="../api" style={{ textDecoration: 'none', color: 'blue' }}>
                        건너뛰기
                    </Link>
                    <button onClick={onClickNext}>2</button>
                    <button onClick={onClickNext2}>3</button>
                    <button onClick={onClickNext3}>4</button>

                    <h1>{text}</h1>
                </ModalContainer>
            </Background>
        </div>
    )
}
export default Tutorial;