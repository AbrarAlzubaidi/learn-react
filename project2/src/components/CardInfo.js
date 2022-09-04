import React, {useEffect, useState} from "react";
import "../assets/css/cardStyles/CardInfo.css"
import self from "../assets/images/woman2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function CardInfo(){
    const [change, setChange] = useState(false);
    function IsChange(){
        if(change){
            setChange(false);
        }else{
            setChange(true);
        }
    }
    return(
        <div className="card-info">
            <div className="card-img">
                <img src={self} alt="something"/>
            </div>
            <h1> Laura Smith {change?<FontAwesomeIcon icon={faMoon} onClick={IsChange}/>:<FontAwesomeIcon icon={faSun} onClick={IsChange}/>}</h1>
            <p className="position">Frontend Developer</p>
            <p className="email">laurasmith.website</p>
            <div className="buttons">
                <a href="https://www.google.com" className="email-btn"> <FontAwesomeIcon icon={faEnvelope} /> Email</a>
                <a href="https://www.google.com" className="linkedin-btn"> <FontAwesomeIcon icon={faLink} /> LinkedIn</a>
                <FontAwesomeIcon icon="fa-brands faLinkedin" />
            </div>

        </div>
    )
}