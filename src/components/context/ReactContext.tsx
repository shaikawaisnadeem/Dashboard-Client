import React from "react";

const ReactContext= React.createContext({
    extension: false,
    setExtension: ()=>{},
    pause: false,
    togglePause: ()=>{},
    pauseShort: false,
    togglePauseShort: ()=>{},
    pauseLong: false,
    togglePauseLong: ()=>{},
    pomodoro: '',
    setPomodoroFun: ()=>{}
})
export default ReactContext