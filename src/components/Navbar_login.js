import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  padding-left: 50px;
  display: grid;
  grid-template-columns: 300px 1fr 300px;
`;
const Logo = styled.div`
  font-family: Ramaraja;
  font-size: 72px;
  line-height: 123px;
  color: #000000;
  padding: 0px;
`;

const Button = styled`
  padding-top: 100rem;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

class NavbarLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: ""
    };
  }
  state = {
    loginResult: true, // 로그인 여부에 따라 페이지를 편집하기 위해 추가
  };

  render() {
    return (
      <div>
        <Container>
          <Link to="./" style={{ textDecoration: "none", color: "#000" }}>
            <Logo>Camble</Logo>
          </Link>
          <div></div>
          <Button>로그아웃</Button>
        </Container>
      </div>
    );
  }
}

export default NavbarLogin;
