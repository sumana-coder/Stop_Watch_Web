let start=document.querySelector("#Start");
let stop=document.querySelector("#Stop");
let reset=document.querySelector("#Reset");

let display=document.getElementById("display");
console.log(display);

let timeNow;
let elapsedTime;
let isRunning=false;
let intervalId;
let timePaused=0;

const handleStart=()=>{
    if(isRunning){
        return;
    }
    else{
        isRunning=true;
        timeNow=Date.now();
        intervalId=setInterval(()=>{
            elapsedTime=Date.now() - timeNow+ timePaused;
            // console.log(elapsedTime);
            display.innerHTML=formatTime(elapsedTime);
        },10);
    }
}
const handleStop=()=>{
    isRunning=false;
    clearInterval(intervalId);
    display.innerHTML=formatTime(elapsedTime);
    timePaused=elapsedTime;
}
const handleReset=()=>{
    elapsedTime=0;
    isRunning=false;
    clearInterval(intervalId);
    display.innerHTML=formatTime(elapsedTime);
}

const formatTime=()=>{
    let min=Math.floor(elapsedTime/(1000*60));
    min=String(min).padStart(2,"0");
    let sec=Math.floor(elapsedTime/1000) % 60;
    sec=String(sec).padStart(2,"0");
    let ms=Math.floor((elapsedTime%1000) / 10);
    ms=String(ms).padStart(2,"0");
    return `${min}:${sec}:${ms}`;
}

start.addEventListener("click",handleStart);
stop.addEventListener("click",handleStop);
reset.addEventListener("click",handleReset);
