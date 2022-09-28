import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    React.useEffect(()=> {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div className="App">
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

    /**
     * notes:
     * 1. if i put the request outside the useEffect function and add a console it will produce an 
     * infinte console loop Why? cause it will render as usual at the first time
     * then the fetch/request including setStarWarsData to store the data inside a state
     * which means re-render the component adian cause the state change and again ... 
     * 
     * 2. side effects: means anything that react cant handle it (not in react system), for ex:
     *  a- localstrorage
     *  b- subscriptions (for example: web socket) 
     *  c- api's/ database interactions
     *  d- syncing 2 different internal states together 
     * 
     * 3. useEffect function has 2 paramete: one is mandotory and the second is optional
     *  a- the callback function (mandotory): will hold the side effect examples 
     *  b- the dependencies array: 
     *      - if it not exist so its like not using the useEffect function (note 1)
     *      - if it an empty array means that run for once (just when the component load)
     *      - if it has a value/data means that re-load/re-render the component when this 
     *        specific data change
      */
