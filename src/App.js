import React, {Component} from "react";
import NavbarLogout from "./components/Navbar_logout";
// import NavbarLogin from "./components/Navbar_login";
import { Route, Routes } from "react-router-dom";
import Api from "./components/Api";
import Main from "./components/Main";
import Tutorial from "./components/Tutorial";
import Mypage from "./components/Mypage";
import "./components/css/Api.css";
import "./components/css/Main.css";
import "./components/css/Chart.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }
   // Login Func
   onLogin = () => {
    this.setState({
        logged: true
    });
  }

  // Logout Func
  onLogout = () => {
    this.setState({
        logged: false
    });
    window.Kakao.Auth.logout(function() {
      console.log("Kakao logout");
    });
    window.sessionStorage.clear();

    // const provider = window.sessionStorage.getItem('provider');    
    // //Google AccessToken Remove
    // if(provider === 'google') {
    //   const auth2 = window.gapi.auth2.getAuthInstance();
    //   auth2.signOut().then(function() {
    //     console.log('Goolge Logout.');
    //   });
    // }
    // // Kakao AccessToken Remove
    // else if(provider === 'kakao'){
    //   window.Kakao.Auth.logout(function() {
    //     console.log("Kakao logout");
    //   });
    // }
    // //SessionStorage Clear
    // window.sessionStorage.clear();
  }

  componentDidMount() {
    const id = window.sessionStorage.getItem('id');
    if(id) {
      this.onLogin();
    }
    else {
      this.onLogout();
    }
  }

  render() {
    const { logged, onLogout } = this.state;
    return (
      <div>
        <NavbarLogout logged={logged} onLogout={onLogout}/>
        <Routes>
          <Route path="/" element={<Main />} exact={true} />
          <Route path="/api" element={<Api />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
