import React from "react";
import logo from "../assets/images/airbnb-logo.png"
import "../assets/css/Navbar.css"
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo}/>
            </div>
        </div>
    )
}