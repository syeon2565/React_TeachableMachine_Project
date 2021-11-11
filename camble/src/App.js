import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Api from "./components/Api";
import Main from "./components/Main";
import styled from "styled-components";

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

const App = () => {
  return (
    <div>
      <Logo>Camble</Logo>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/api" element={<Api/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default App;