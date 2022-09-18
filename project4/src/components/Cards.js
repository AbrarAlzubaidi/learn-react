import React from "react";
import photo from "../assets/images/pexels-aleksandar-pasaric-1285625.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "../assets/css/Cards.css";

export default function Cards(){
    return(
        <div className="card">
            <div className="image">
                <img src={photo}/>
            </div>
            <div className="card-content">
                <div className="card-upper-section">
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                    <h3 className="location">Maroco</h3>
                    <a href="https://www.google.com">View on Google Maps</a>
                </div>
                <h2 className="card-title">Mount Fuji</h2>
                <p className="card-date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}