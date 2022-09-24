import React from "react"
import boxes from "./boxes"
import signs from "./signs"
import Box from "./components/Box"
import LightSign from "./components/LightSign"
import "./App.css"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    const [circles, setCircles] = React.useState(signs)

    // step1: create the function 
    // step3: make the function can recieve a parameter (which is the id for each box)
    // step4: change the on proparity that inside the squares state to the opposite of the original value
    /* function toggle(id) {
        setSquares(prev=>{
          // define a new empty array that will hold the changable array
          let newArr = []
          // loop through the prev array
          for(let i=0; i<prev.length; i++){
            // check if the box id is match the clicked box
            let current = prev[i]
            if(current.id === id){
              // if matches then flip the on properity (dont forget each box is an object)
              current = {
                ...current,
                on: !current.on
              }
              // then push it to the new array
              newArr.push(current)
            }else{
              // push the none matched boxes to the new array
              newArr.push(prev[i])
            }
          }
          return newArr;
        })
    }*/
   function toggle(id){
    setSquares(prev=>{
      let newPrev= prev.map(item=>{
        /* first  way by using the if-else condition 
        if(item.id === id){
          return {
            ...item,
            on: !item.on
          }
        } else {
          return item
        }
        */
       /* second way by using the ternary operator*/
       return item.id === id ? {...item, on: !item.on} : item
      })
      return newPrev
    })
   }

   function toogleCircle(id){
      setCircles(prev=>{
        let newPrev = prev.map(circle=>{
          return circle.id === id ? {...circle, on: !circle.on} : circle
        })
        return newPrev
      })  
   }

   const squareElements = squares.map(square => (
       <Box 
           key={square.id} 
           on={square.on} 
           // toggle={toggle} // step2: pass the function as props
           // we can do another option rather than pass the id as a props we can pass it 
           // directly to the function, and in the child component we can pass it as props.toggle rather than
           // props.toggle(props.id)
           // id={square.id}
           toggle={()=>toggle(square.id)}
       />
   ))

   const circleElements = circles.map(circle=>{
    return <LightSign
              key={circle.id}
              data={circle}
              toogleCircle = {()=> toogleCircle(circle.id)}
              />
   })

    
    return (
        <main>
            <div className="box-container">
             {squareElements}
            </div>
            <div className="sign-container">
            {circleElements}
            </div>
        </main>
    )
}
