import React from "react";
import ReactDOM from "react-dom";

// order is so important when it comes to override the properties that been declared in antd 
// so, in you wanna override then you have to import your file after the you import the css file of antd 
import 'antd/dist/antd.css';
import "./index.scss";
import App from "./App"

ReactDOM.render(<App /> , document.getElementById("root"))