import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Api from "./components/Api";
import Main from "./components/Main";
import Tutorial from "./components/Tutorial";
// import Mypage from "./components/Mypage";
import "./components/css/Api.css"
import "./components/css/Main.css"
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content:center;
`
const SubMain = styled.div`
    font-size: 50px;
    line-height: 62px;
    color: #000000;
    text-align:center;
`;

const Button = styled.div`
    width: 400px;
    height: 134px;
    background: #1967D2;
    font-size: 40px;
    line-height: 130px;
    mix-blend-mode: normal;
    text-align:center;
 `;
const TextBox = styled.div`
    font-size: 20px;
    line-height: 30px;
    mix-blend-mode: normal;
    position: absolute;
`

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} exact={true}/> 
        <Route path="/api" element={<Api/>}/>
        <Route path="/tutorial" element={<Tutorial/>}/>
      </Routes>
    </div>
  );
}
export default App;