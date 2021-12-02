import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
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
`;

const Button = styled.div`

  width: 96px;
  left: 450px;
  top: 500px;
  line-height: 30px;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  background: #777;
  cursor: pointer;
`;
const Text = styled.div`
  height: 44px;
  width: 220px;
  left: 66px;
  border-radius: nullpx;
  padding-left: 400px;
  font-size: 20px;
  color: #ffffff;
`;

var i = 0;

const Tutorial = () => {
  const [tuto, setTuto] = useState(true);
  const [text, setText] = useState(
    "웹 캠 사용을 허락한 후, 잠시 기다려주세요!"
  );
  const array = [
    "자신의 얼굴과 어깨선을 기준으로, 움직이는 자세에 따라 거북목인지 정상인지 나타납니다.",
    "범위에 따라 거북목일 때의 비율이 높을 시 알림으로 경각심을 줄 수 있습니다.",
    "자신의 거북목 측정값을 마이페이지에 기록하세요!",
  ];

  const onClickNext = () => {
    if (i !== array.length) {
      setText(array[i++]);
      console.log(tuto);
      console.log(i);
      document.getElementById("two_button").style.display = "none";
      if (i === 3) {
        setTuto(false); //else로 가지고왔더니.. false값이 처음에 바뀌지 않아 우선 이렇게 해결...
        document.getElementById("one_button").style.display = "none";
        document.getElementById("two_button").style.display = "block";
      }
    }
    console.log(tuto);
  };

  return (
    <div>
      <Background>
        <ModalContainer>
          <Nav>간단 사용법</Nav>
          <Link to="../api" style={{ textDecoration: "none", color: "blue" }}>
            건너뛰기
          </Link>
          <Button id="one_button" onClick={onClickNext}>
            Next
          </Button>
          <Link
            id="two_button"
            to="../api"
            style={{ textDecoration: "none", color: "black", display: "none" }}
          >
            <Button>Next</Button>
          </Link>
          <Text>{text}</Text>
        </ModalContainer>
      </Background>
    </div>
  );
};
export default Tutorial;
