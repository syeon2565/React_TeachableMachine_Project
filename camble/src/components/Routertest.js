import React, {useState} from "react";
import Api from "./Api";
import Main from "./Main";
import styled from "styled-components";

const Button = styled.div`
    top:230px;
    left:820px;
    right:175px;
    width: 400px;
    height: 134px;
    background: #1967D2;
    font-size: 45px;
    text-align: center;
    line-height: 130px;
    mix-blend-mode: normal;
    position: absolute;
 `;

const Routertest=()=> {

    
    const [viewCalendar, setViewCalendar] = useState(true)
    return (
      <div className="contentWrapper">
        <div className="contentBody mainWrapper">
          <div className="mainButtonWrapper">
            <Button
              onClick={() => setViewCalendar(true)}
            >
              달력
            </Button>
            <Button
              onClick={() => setViewCalendar(false)}
            >
              타임라인
            </Button>
          </div>
          <div className="mainComponentWrapper">
             { viewCalendar ? <Main/> : <Api/> }
          </div>
        </div>
      </div>
    );
  }
  
  export default Routertest;