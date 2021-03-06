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
// import KaKaoLogin from "./components/KaKaoLogin";
// import KaKaoLogout from "./components/KaKaoLogout";

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
      console.log("Kakao 로그인");
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
        {/* <NavbarLogin logged={logged} onLogout={onLogout}/> */}
        {/* <KaKaoLogout/> */}
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/api" element={<Api />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    );
  }
}
export default App;
