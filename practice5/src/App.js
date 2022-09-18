import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import "./App.css"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on}/>
    ))
    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components (DONE)
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects (DONE)
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
