import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
height: 43px;
width: 136px;
padding-left:470px;
left: -140px;
top: -157px;
border-radius: nullpx;
font-size: 25px;
`

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
            <Nav>간단 사용법</Nav>
            <Link to="../api">
                건너뛰기
            </Link>
            <Link to="../tutorial2">
                <But>Next</But>
            </Link>
            <Text>측정 버튼을 클릭하여<br />
                웹캠 사용을 허락한다.</Text>
        </div>
    )
}
export default Tutorial1;