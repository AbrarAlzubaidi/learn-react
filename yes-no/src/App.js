import React from "react"
import "./App.css"
export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    const [isRun, setIsRun] = React.useState(false)
    let delay;
    React.useEffect(()=>{
      delay = setTimeout(changeMind , 70);
    })
    function changeMind() {
      if(isGoingOut && isRun){
        setIsGoingOut(false)
      } else {
        setIsGoingOut(true  )
      }
    }
    function run(){
      setIsRun(false)
      delay = setTimeout(changeMind , 100);

    }
    
    function stop(){
      setIsRun(true)
      clearTimeout(delay)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
            {isRun ? <button onClick={run} className='btn'>STOP</button>: <button onClick={stop} className='btn'>RUN</button>}
        </div>
    )
}
