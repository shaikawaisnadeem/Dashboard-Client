import './App.css'
import Home from './components/pages/home/Home';
import ReactContext from './components/context/ReactContext';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Statistics from './components/Statistics/Statistics';

function App() {
    const [pause, setPause] = useState(true);
    const togglePause = () => {
        setPause(prev => !prev);
    };
    const [pauseShort, setPauseShort] = useState(true);
    const togglePauseShort = () => {
        setPauseShort(prev => !prev);
    };
    const [pauseLong, setPauseLong] = useState(true);
    const togglePauseLong = () => {
        setPauseLong(prev => !prev);
    };
  const [extension, setExtension] = useState<boolean >(true)
  const toggleExtention = ()=>{
    setExtension(prev=>!prev)
  }
  const [pomodoro, setPomodoro]= useState<string>('');
  const setPomodoroFun:any = (timer)=>{
    setPomodoro(timer)
  }
  return (
    <ReactContext value={{extension, setExtension: toggleExtention, pause,togglePause, pomodoro, setPomodoroFun,pauseShort, togglePauseShort, pauseLong, togglePauseLong}}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
      </BrowserRouter>
    </ReactContext>
  )
}

export default App
