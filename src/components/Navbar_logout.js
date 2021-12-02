import React, { Component } from "react";
import KakaoLogin from "react-kakao-login";
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

const KakaoButton = styled(KakaoLogin)`
  padding-top: 100rem;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
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

class NavbarLogout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
    };
  }
  state = {
    loginResult: false, // 로그인 여부에 따라 페이지를 편집하기 위해 추가
  };

  // Kakao Login
  responseKakao = (res) => {
    this.setState({
      id: res.profile.id,
      name:res.profile.name,
    });
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };
  doSignUp = () => {
    const { id, name } = this.state;

    window.sessionStorage.setItem('id', id);
    window.sessionStorage.setItem('name', name);
    this.props.onLogin();
    this.props.history.push('/');
}


  render() {
    return (
      <div>
        <Container>
          <Link to="./" style={{ textDecoration: "none", color: "#000" }}>
            <Logo>Camble</Logo>
          </Link>
          <div></div>
          <KakaoButton
            jsKey={process.env.REACT_APP_Kakao}
            buttonText="Kakao"
            onSuccess={this.responseKakao}
            onFailure={this.responseFail}
            getProfile="true"
          />
        </Container>
      </div>
    );
  }
}

export default NavbarLogout;
