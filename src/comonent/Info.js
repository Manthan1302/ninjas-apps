import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import "../style/info.css";

function Info(){
    return(
        <div className="flex">
        <div className="contact"><h2>Contact</h2></div>
        <div className="add"><h2>Address:-Ahmedabad,Gujarat</h2></div>
        <div className="pn"><h2>number:-6352896341</h2></div>
        <div className="email"><h2>email:-manthanthakkar1307@gmail.com</h2></div>
        </div>
    )
}
export default Info;