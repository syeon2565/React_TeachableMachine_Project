import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Api from "./components/Api";
import Main from "./components/Main";
import Tutorial1 from "./components/Tutorial1";
import Tutorial2 from "./components/Tutorial2";
import Tutorial3 from "./components/Tutorial3";
import Tutorial4 from "./components/Tutorial4";
import Mypage from "./components/Mypage";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} exact={true}/> 
        <Route path="/api" element={<Api/>}/>
        <Route path="/tutorial1" element={<Tutorial1/>}/>
        <Route path="/tutorial2" element={<Tutorial2/>}/>
        <Route path="/tutorial3" element={<Tutorial3/>}/>
        <Route path="/tutorial4" element={<Tutorial4/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
      </Routes>
    </div>
  );
}
export default App;