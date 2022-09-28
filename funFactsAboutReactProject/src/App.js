import './App.css';
import React from 'react';
import Main from './components/Main';
import Navbar from"./components/Navbar";


function App() {
  const [lightMode, setLightMode] = React.useState(false)
  function toggleLightMode (){
    setLightMode(prev=> !prev)
  }
  return (
    <div>
        <Navbar 
          lightMode={lightMode}
          toggleLightMode={toggleLightMode}
        />
        <Main lightMode={lightMode}/>
    </div>
  );
}

export default App;
