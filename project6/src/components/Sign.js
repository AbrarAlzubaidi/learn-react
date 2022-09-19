import React from "react"
export default function Sign(props){
    // const timerRef = React.useRef(null);
    // React.useEffect(() => {
    //     timerRef.current = setTimeout(() => {
    //         props.toogleCircle(props.data.id)

    //     }, 2000);
    //     return () => {
    //       clearTimeout(timerRef);
    //     };
    //   },[props.data]);

    const styleCircle = {
        backgroundColor: props.data.on? props.data.onColor: props.data.offColor
    }
    return(
        <div className="sign" style={styleCircle} onClick={props.toogleCircle}></div>
    )
}