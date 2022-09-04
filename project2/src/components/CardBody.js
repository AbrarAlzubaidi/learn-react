import React from "react";
import "../assets/css/cardStyles/CardBody.css";
import CardAbout from "../components/CardAbout";
import CardInfo from "../components/CardInfo";
import CardFooter from "../components/CardFooter";

export default function CardBody (){
    return (
        <div className="card-body">
            <CardInfo/>
            <CardAbout/>
            <CardFooter/>
        </div>
    )
}