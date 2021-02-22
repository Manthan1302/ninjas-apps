import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import "../style/Header.css";
import image from "../images/OIP.jpg";

function Header(){
   return (     
<div className="div">
    
    <img src={ image } alt="OIP.jpg" className="img" />
   <h1>Manthan Thakkar</h1>
   
</div>
)
}
 
export default Header;