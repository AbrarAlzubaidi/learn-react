import React from "react";
import "../assets/css/cardStyles/CardFooter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function CardFooter(){
    return(
        <div className="card-footer">
            <div className="icon"><FontAwesomeIcon icon={faSquareTwitter} /></div>
            <div className="icon"><FontAwesomeIcon icon={faSquareFacebook} /></div>
            <div className="icon"><FontAwesomeIcon icon={faSquareInstagram} /></div>
            <div className="icon"><FontAwesomeIcon icon={faSquareGithub} /></div>
        </div>
    )
}