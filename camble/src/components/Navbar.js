import React, { Component } from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-flow: row;
`
const Logo = styled.div`
  width: 463px;
  height: 164px;
  font-family: Ramaraja;
  font-size: 72px;
  line-height: 123px;
  color: #000000;
  padding-left: 67px;
  padding-top: 15px;
  
`;
const KakaoButton = styled(KakaoLogin)`
    padding: 0px;
    line-height: 44px;
    color: #000000;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    height: 82px;
    width: 291px;
    left: 300px;
    top: -307px;
`
class Login extends Component {

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



export default Login;
