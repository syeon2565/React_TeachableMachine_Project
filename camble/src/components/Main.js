import React from "react";
import styled from 'styled-components';
import ex2 from '../img/ex2.png';
// import Api from "./Api";
import { Link } from "react-router-dom";
// const Logo = styled.div`
// width: 463px;
// height: 164px;
// font-family: Ramaraja;
// font-size: 72px;
// line-height: 123px;
// color: #000000;
// padding-left: 67px;
// padding-top: 48px;
// `;

// const Container = styled.div`
//     display: flex;
//     flex-flow: column wrap;
// `
// const Login = styled.div`
// width: 190px;
// height: 44px;
// line-height: 44px;
// color: #783c00;
// background-color: #FFEB00;
// border: 1px solid transparent;
// border-radius: 3px;
// font-size: 16px;
// font-weight: bold;
// text-align: center;
// `;



const SubMain = styled.div`
    top:300px;
    left: 760px;
    position: absolute;
    width: 642px;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 62px;
    color: #000000;
`;
const IMG = styled.div`
    top:300px;
    padding-left:250px;
`
const Button = styled.div`
    top:430px;
    left:820px;
    right:175px;
    width: 400px;
    height: 134px;
    background: #1967D2;
    font-size: 45px;
    text-align: center;
    line-height: 130px;
    mix-blend-mode: normal;
    position: absolute;
 `;
const TextBox = styled.div`
    top:730px;
    left:330px;
    font-size: 20px;
    line-height: 30px;
    mix-blend-mode: normal;
    position: absolute;
`


const Main = () => {
    return (
        <div>
            <div className="body">
                <IMG><img src={ex2} alt="ex2" width="400" /></IMG>

                <SubMain>
                    당신의 목은 안녕하신가요?
                </SubMain>
                <Link to="./api">
                    <Button> 거북목 측정하러 가기 </Button>
                </Link>


                {/* <div className="mainComponentWrapper">
                {viewCalendar ? <Api /> : <Main />}
            </div> */}

            </div>

            <TextBox>
                camble은 cam + curble 의 합성어로, 웹캠을 이용하여 거북목을 측정해주는 서비스입니다.<br />
                camble은 인터넷을 사용하는 누구나 사용할 수 있으며, 거북목이 되었을 시 알림으로 경각심을 주어<br />
                사용자의 자세를 올바르게 교정하는데 도움을 줄 수 있습니다.
            </TextBox>
        </div >
    )
}
export default Main;
// export default ApiPage; // 한개만 해줘야하는데/?