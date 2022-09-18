import React from 'react';

function Spread() {
    const [array, setArray] = React.useState([]);
    function addItem() {
        setArray(prev => {
            return [...prev, `Thing ${prev.length+1}`]  /* return array of the previous data and 
                                                         add to it the new data */
        })
    }
    
    const newArray = array.map(item=>{
        return <p key={item}>{item}</p>
    })
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {newArray}
        </div>
    )
}

