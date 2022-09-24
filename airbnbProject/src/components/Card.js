import React from "react";
// import photo from '../assets/images/katie-zaferes.png';
import star from "../assets/images/star.png"
import "../assets/css/Card.css"
export default function Card(props){
    let cardBadge;
    if(props.openSpots == 0){
        cardBadge = "SOLD OUT";
    } else if(props.location == "Online") {
        cardBadge = "ONLINE";
    }
    return(
        <div className='card'>
            <div className="card-container">
                <div className='card-img'>
                <img src={require(`../assets/images/${props.coverImg}`)} />
                    {cardBadge && <button>{cardBadge}</button>}
                </div>
                <div className='card-content'>
                    <div className='rate'>
                        <img src={star}/>
                        <p>{props.rating}({props.reviewCount}).{props.location}</p>
                    </div>
                    <div className='title'>
                        <p>{props.title}</p>
                    </div>
                    <div className='cost'>
                        <p>From ${props.price} / person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}