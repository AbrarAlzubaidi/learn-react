import React from "react"
import WindowTracker from "./component/WindowTracker"
import "./App.css"

export default function App() {    
    const [show, setShow] = React.useState(false)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }
    
    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}
