import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
<BrowserRouter>
  <Root/>
</BrowserRouter>,document.getElementById('root'));
