import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Header from "./comonent/Header";
import Info from "./comonent/Info";
import Details from "./comonent/Details";
import Details2 from "./comonent/Details2";
import Details3 from "./comonent/Details3";

ReactDOM.render(
  <div>
    <Header />
    <Info />
    <Details />
    <Details2 />
    <Details3 />
    
  </div>,
  document.getElementById('root')
);

