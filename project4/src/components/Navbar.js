import React from "react"
import "../assets/css/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
export function Navbar(){
    return(
        <header>
            <div className="icon">
                <FontAwesomeIcon icon={faEarth} />
            </div>
            <p className="title"> my travel journal. </p>
        </header>
    )
}