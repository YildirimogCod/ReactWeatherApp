import { useState } from 'react'
import React from 'react'
import './App.css'
import Form from './components/form'
import Info from './components/Info'
function App() {
 
const [info,setInfo] = useState([]);
const [state,setState] = useState(false);
  return (
    <div className="App">
      <Form info={info} setInfo = {setInfo} setState={setState}/>
      <Info info={info}/>
      
    </div>
  )
}

export default App
