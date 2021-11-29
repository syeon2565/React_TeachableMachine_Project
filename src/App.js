import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Api from "./components/Api";
import Main from "./components/Main";
import Tutorial from "./components/Tutorial";
import Mypage from "./components/Mypage";
import "./components/css/Api.css"
import "./components/css/Main.css"
import "./components/css/Chart.css"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} exact={true}/> 
        <Route path="/api" element={<Api/>}/>
        <Route path="/tutorial" element={<Tutorial/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
      </Routes>
    </div>
  );
}
export default App;