import './App.css'
import Home from './components/pages/home/Home';
import ReactContext from './components/context/ReactContext';
import { useState } from 'react';
function App() {
  const [extension, setExtension] = useState<boolean >(false)
  const toggleExtention = ()=>{
    setExtension(prev=>!prev)
  }
  return (
    <ReactContext value={{extension, setExtension: toggleExtention}}>
      <Home/>
      
    </ReactContext>
  )
}

export default App
