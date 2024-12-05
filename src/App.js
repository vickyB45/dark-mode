
import './App.css';
import MainSec from './componant/MainSec';
import Navbar from './componant/Navbar';
import { useState } from 'react';

function App() {

const [mode,setMode]=useState('light')
const [boxmode,setBoxMode]=useState('light')

const toggleMode =()=>{
  if(mode === 'secondary'){
    setMode("light")
    document.body.style.backgroundColor = "white"
    setBoxMode('light')
  }
  else{
    setMode('secondary')
    document.body.style.backgroundColor = "black"
    setBoxMode('info')
  }
}



  return (
    <div >
     <Navbar mode={mode} toggleMode={toggleMode}/>
     < MainSec mode={boxmode}/>
    </div>

  );
}

export default App;
