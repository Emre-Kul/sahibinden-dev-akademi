import React from "react";
import ReactDOM from "react-dom";


const APP_ELEMENT = document.getElementById("root");

import Home from "./fragments/home/home.jsx";

ReactDOM.render(

  <React.Fragment>
    <Home />
  </React.Fragment>
  ,
  APP_ELEMENT);
