import React from "react";
import "../css/Navbar.css"
export default function Navbar(){
    return(
        <header>
            <div className="logo">
                <img src="/images/troll-face.png"/>
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}