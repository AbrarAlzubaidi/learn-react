import React from "react"

export default function WindowTracker() {
   const [windowSize, setWindowSize] = React.useState(window.innerWidth)
/*
    why we use this cause i want to listen to the resize event that is 
    cannot hold it usig react, after listening then we want to update the window size by
    updating it via state, why? cause i want to re-render the component whenever the window size
    changed
*/
   React.useEffect(()=>{
    const watchWidth = ()=>{
        console.log("set component (mount)")
        setWindowSize(window.innerWidth)
    }
    window.addEventListener("resize", watchWidth)

    const cleanUp = () =>{
        console.log("clean component (un-mount)")
        window.removeEventListener("resize", watchWidth)
    }
    return cleanUp;
   }, [])

   return(
    <h1>Window width: {windowSize}</h1>
   )
}
/**
 * ! an important note: !
 * there is something called memory leak, which is a problem that appear when the component
 * unmount but there is a DOM method/element still render under the hood 
 * * for example: *
 * the example above in APP.js we render this WindowTracker component when show state is true
 * but what happen is when the state is false the component not render/not mount but the event
 * listener still render cause window object is a DOM element and this is a problem (hidden problem)
 * in other and simple words: even if the component not render due to state/flag the DOM element 
 * that inside it will render
 * ? so how can i fix it ?
 * by useEffect cleanUp function
 * useEffect has 2 params the callback function and the dependencies array, inisde the callback 
 * function we can return the cleanup function like above.
 * ^ note: 
 * this might happen not just for the DOM it will also happen if we use websocket and start 
 * the connection and in some point we want the page refresh when the message send so we need
 * to clear the connection and so on...
 */

/**
 * ! an important note: !
 * using async function inside the useEffect
 * we cant use the async function inside the useEffect cause the useEffect might return 
 * the cleanUP function, so if we put it as async then it will always return a promise (as async function)
 */
/**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function.
    */