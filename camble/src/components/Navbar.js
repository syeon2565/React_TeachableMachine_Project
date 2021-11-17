import React, { Component } from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';


const Container = styled.div`
    padding-top :20px;
    padding-left:50px;
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
  
`;
// const KakaoButton = styled(KakaoLogin)`
//     line-height: 44px;
//     color: #000000;
//     background-color: #FFEB00;
//     border: 1px solid transparent;
//     border-radius: 3px;
//     font-weight: bold;
//     text-align: center;
// `


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

const KakaoButton = styled(KakaoLogin)`
  padding: 50rem;
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
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Navbar;
