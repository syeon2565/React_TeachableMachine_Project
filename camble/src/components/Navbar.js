import React, { Component } from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';


const Container = styled.div`
    padding :20px;
    padding-left:50px;
    display: grid;
    grid-template-columns: 300px 1fr 300px;
`
const Logo = styled.div`
  font-family: Ramaraja;
  font-size: 72px;
  line-height: 123px;
  color: #000000;
  padding:0px;
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
  display:flex;
  justify-content:flex-end;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }

    // Kakao Login
    responseKakao = (res) => {
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao'
        })
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <div>
                <Container>
                    <Logo>Camble</Logo>
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



export default Navbar;
