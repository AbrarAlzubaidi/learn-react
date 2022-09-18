import React from "react";
import "../css/ImageSection.css"

export default function ImageSection(props){
    return(
        <div className="meme">
            <img src={props.image_url.url} alt="meme"/>
        </div>
    )
}