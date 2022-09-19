import React from "react";
import Sign from "./Sign";
export default function LightSign(props){
    return (
        <Sign 
            data={props.data}
            toogleCircle={props.toogleCircle}
        />
    )
}