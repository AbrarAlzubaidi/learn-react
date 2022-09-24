import React from "react";
import img from "../assets/images/photo-grid.png"
import "../assets/css/GridImages.css"

export default function GridImages(){
    return(
        <div className="hero-section">
            <img src={img}/>
        </div>
    )
}