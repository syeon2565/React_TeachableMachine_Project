import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const SubMain = styled.div`
  font-size: 50px;
  line-height: 62px;
  color: #000000;
  text-align: center;
`;

const Button = styled.div`
  width: 400px;
  height: 134px;
  background: #1967d2;
  font-size: 40px;
  line-height: 130px;
  mix-blend-mode: normal;
  text-align: center;
`;
const TextBox = styled.div`
  font-size: 20px;
  line-height: 30px;
  mix-blend-mode: normal;
  position: absolute;
`;

const Main = () => {
  return (
    <div>
      <div className="body">
        <Container>
          <img src="img/ex2.png" alt="predict" width="400" />
          <div className="body-center-text">
            <div className="body-center-text1">
              <SubMain>당신의 목은 안녕하신가요?</SubMain>
            </div>
            <div className="body-center-text2">
              <Link
                to="./tutorial"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Button> 거북목 측정하러 가기 </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <TextBox className="body-text">
        {" "}
        <br />
        <br />
        camble은 cam + curble 의 합성어로, 웹캠을 이용하여 거북목을 측정해주는
        서비스입니다.
        <br />
        camble은 인터넷을 사용하는 누구나 사용할 수 있으며, 거북목이 되었을 시
        알림으로 경각심을 주어
        <br />
        사용자의 자세를 올바르게 교정하는데 도움을 줄 수 있습니다.
      </TextBox>
    </div>
  );
};
export default Main;
